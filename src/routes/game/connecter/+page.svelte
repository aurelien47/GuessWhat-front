<script>
  export let data;

  import { onMount } from 'svelte';
  let selectedTheme = 'default';
  let themes = data.themes; 
  let hint = '';
  let questions = [];
  let answers = [
    { text: 'Texte de la réponse 1', isCorrect: false },
    { text: 'Texte de la réponse 2', isCorrect: false },
    { text: 'Texte de la réponse 3', isCorrect: true },
    { text: 'Texte de la réponse 4', isCorrect: false },
    { text: 'Texte de la réponse 5', isCorrect: false },
  ];
  let selectedAnswer = null;
  let score = 0;

  // onMount(async () => {
  //   const response = await fetch('https://guesswhat-api.onrender.com/themes.names');
  //   if (response.ok) {
  //     themes = await response.json();
  //   }
  // });

  async function handleThemeChange(event) {
    selectedTheme = event.target.value;
    const response = await fetch(`https://guesswhat-api.onrender.com/theme/${selectedTheme}`);
    if (response.ok) {
      const data = await response.json();
      questions = data.riddles;
      console.log(questions)
    }
  }
  
  // function handleAnswerClick(answer) {
  //   selectedAnswer = answer;
  // }

  // async function handleSubmit() {
  //   if (selectedAnswer) {
  //     const response = await fetch('https://guesswhat-api.onrender.com/validate-answer', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  // selectedAnswer: selectedAnswer.text
  //       })
  //     });
  //     if (response.ok) {
  //       const result = await response.json();
      
  //     }
  //   } else {
  //     console.log('Aucune réponse sélectionnée.');
  //   }
  // }

  async function checkAnswer(answer, questionId) {
    if (answer.is_good_answer) {
      score += 1;
    }

    const btnAnswers = document.querySelectorAll(`#answers-${questionId} button`);

    btnAnswers.forEach((btnAnswer) => {
      btnAnswer.setAttribute('disabled', true);
    });
  }
</script>

<main>
  <div class="top-section">
    <div class="score-section">
      <span>Scores :</span>
      <div class="score-box">
        {score}
      </div>
    </div>
    <div class="theme-section">
      <label for="theme-select">Choix du thème :</label>
      <select id="theme-select" bind:value={selectedTheme} on:change={handleThemeChange}>
        {#each themes as theme , i}
          <option value="{theme.id}">{theme.name}</option>
        {/each}
      </select>
    </div>
  </div>
  {#each questions as question}
    <div class="question-section">
      <span>Question :</span>
      <div class="question-box">
        {question.content}
      </div>
    </div>
  <div class="hint-section">
    <button on:click={() => hint = "Voici un indice pour la question."}>Veux-tu un indice ?</button>
    <div class="hint-box">{hint}</div>
  </div>
  <div id={`answers-${question.id}`} class="answers-section">
    {#each question.answers as answer}
      <button on:click={() => checkAnswer(answer, question.id)}>{answer.content}</button>
    {/each}
  </div>
  {/each}
  <!-- <div class="validation-section">
    <button on:click={handleSubmit} type="button">VALIDER</button>
  </div> -->
</main>

<style>
  .top-section, .hint-section, .answers-section, .validation-section {
    margin-bottom: 20px;
  }

  .theme-section, .question-section, .score-section {
    margin-bottom: 10px;
  }

  .question-box, .score-box, .hint-box {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 5px;
  }

  .answers-section button {
    padding: 10px;
    margin: 5px;
    background-color: #677A91;
    color: #FFCD29;
    border: none;
    cursor: pointer;
  }

  .answers-section button.selected {
    background-color: #FFCD29;
    color: #2C3E50;
  }

  .answers-section button:hover {
    opacity: 0.8;
  }
</style>
