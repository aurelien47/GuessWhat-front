<script>
  export let data;

  import { onMount } from 'svelte';
  let selectedTheme = 'default';
  let themes = data.themes; 
  let questions = [];
  let themeScores = {}; // Scores par thème
  let themeIncorrectAnswers = {}; // Compteur de mauvaises réponses par thème
  let isValidate = false;
  async function handleThemeChange(event) {
    selectedTheme = event.target.value;
    const response = await fetch(`https://guesswhat-api.onrender.com/theme/${selectedTheme}`);
    if (response.ok) {
      const data = await response.json();
      questions = data.riddles;
    }
  }

  console.log('theme scores', themeScores)
  
  async function checkAnswer(answer, questionId) {
    if(!themeScores[selectedTheme]){
          themeScores[selectedTheme] = 0;
        }
    const questionIndex = questions.findIndex(q => q.id === questionId);
    if (questionIndex !== -1) {
      if (answer.is_good_answer) {

          themeScores[selectedTheme] += 2;
    

      } else {

        themeIncorrectAnswers[selectedTheme]++;
      }
    }
    const btnAnswers = document.querySelectorAll(`#answers-${questionId} button`);

    btnAnswers.forEach((btnAnswer) => {
      btnAnswer.setAttribute('disabled', true);
    });


  }
</script>
<main>
  <div class="top-section">
    <div class="theme-section">
      <label for="theme-select">Choix du thème :</label>
      <select id="theme-select"  on:change={handleThemeChange}>
        <option> -- Choisissez un thème --</option>
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
    <div id={`answers-${question.id}`} class="answers-section">
      {#each question.answers as answer}
        <button on:click={() => checkAnswer(answer, question.id)} disabled={isValidate}>{answer.content}</button>
      {/each}
      
    </div>
    
  {/each}
  {#if !isValidate}
  <button on:click={() => isValidate = true} disabled={themeScores[selectedTheme] === undefined}>valider</button>
  {/if}
  {#if isValidate}
  Vous avez obtenue un score de {themeScores[selectedTheme]}. Pour l'enregistrer, veuillez vous <a href='/register'>inscrire</a>
  {/if}
</main>
<style>
  .top-section, .answers-section {
    margin-bottom: 20px;
  }

  .theme-section, .question-section {
    margin-bottom: 10px;
  }

  .question-box {
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

  .answers-section button:hover {
    opacity: 0.8;
  }
</style>
