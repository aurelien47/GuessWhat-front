<script>
  export let data;
 
  console.log(data.token)

  import { onMount } from 'svelte';
  let selectedTheme = 'default';
  let themes = data.themes; 
  let hint = '';
  let questions = [];
  let themeScores = {}; // Scores par thème
  let themeHintsUsed = {}; // Compteur d'indices utilisés par thème
  let themeIncorrectAnswers = {}; // Compteur de mauvaises réponses par thème

  onMount(async () => {
    // Initialiser le score, les indices utilisés et les mauvaises réponses pour chaque thème
    themes.forEach(theme => {
      themeScores[theme.id] = 0;
      themeHintsUsed[theme.id] = 0;
      themeIncorrectAnswers[theme.id] = 0;
    });
  });

  async function handleThemeChange(event) {
    selectedTheme = event.target.value;
    const response = await fetch(`https://guesswhat-api.onrender.com/theme/${selectedTheme}`);
    if (response.ok) {
      const data = await response.json();
      questions = data.riddles.map(question => ({
        ...question,
        usedHint: false
      }));
    }
  }

  function requestHint(questionId) {
    hint = "Voici un indice pour la question.";
    const questionIndex = questions.findIndex(q => q.id === questionId);
    if (questionIndex !== -1) {
      questions[questionIndex].usedHint = true;
      themeHintsUsed[selectedTheme]++;
      // Envoyer les données au serveur si nécessaire
      hint = questions[questionIndex].indicator
    }
  }

  async function checkAnswer(answer, questionId) {
    const questionIndex = questions.findIndex(q => q.id === questionId);
    if (questionIndex !== -1) {
      if (answer.is_good_answer) {
        themeScores[selectedTheme] += questions[questionIndex].usedHint ? 1.5 : 2;
      } else {
        themeIncorrectAnswers[selectedTheme]++;
      }
    
      const btnAnswers = document.querySelectorAll(`#answers-${questionId} button`);
      btnAnswers.forEach(btn => btn.setAttribute('disabled', true));
    }
  }

  async function updateScore(themeId, score, hintsUsed, incorrectAnswers) {
    const scoreData = {
    
      theme_id: themeId,
      score: score,
      count_indicators: hintsUsed,
      errors: incorrectAnswers
    };

    try {
      const response = await fetch('https://guesswhat-api.onrender.com/user/play', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + data.token
        },
        body: JSON.stringify(scoreData)
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour du score');
      }
      // Traitement supplémentaire si nécessaire
    } catch (error) {
      console.error('Erreur lors de l’envoi du score:', error);
    }
  }
</script>


<main>
  <div class="top-section">
    <div class="score-section">
      <span>Scores pour {themes.find(t => t.id === selectedTheme)?.name || 'le thème sélectionné'} :</span>
      <div class="score-box">
        {themeScores[selectedTheme] || 0}
      </div>
    </div>
    <div class="theme-section">
      <label for="theme-select">Choix du thème :</label>
      <select id="theme-select" bind:value={selectedTheme} on:change={handleThemeChange}>
        <option> -- Choisissez un thème --</option>
        {#each themes as theme}
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
      <button on:click={() => requestHint(question.id)}>Veux-tu un indice ?</button>
      {#if hint === question.indicator}
        <div class="hint-box">{hint}</div>
      {/if} 
      
    </div>
    <div id={`answers-${question.id}`} class="answers-section">
      {#each question.answers as answer}
        <button on:click={() => checkAnswer(answer, question.id)}>{answer.content}</button>
      {/each}
    </div>
  {/each}

  <button on:click={() => updateScore(selectedTheme, themeScores[selectedTheme], themeHintsUsed[selectedTheme], themeIncorrectAnswers[selectedTheme])}>valider</button>
</main>

<style>
  .top-section, .hint-section, .answers-section {
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
  .answers-section button:hover {
    opacity: 0.8;
  }

</style>