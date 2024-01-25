<script>
export let form;
console.log(form);


  let selectedTheme = 'default'; 
  const themes = ['Thème 1', 'Thème 2', 'Thème 3']; 
  let hint = ''; // L'indice pour la question
  let answers = [
    { text: 'Texte de la réponse 1', isCorrect: false },
    { text: 'Texte de la réponse 2', isCorrect: false },
    { text: 'Texte de la réponse 3', isCorrect: true },  // Supposons que c'est la bonne réponse
    { text: 'Texte de la réponse 4', isCorrect: false },
    { text: 'Texte de la réponse 5', isCorrect: false },
  ]; 

  let selectedAnswer = null; 


  function handleThemeChange(event) {
    selectedTheme = event.target.value;
    
  }

  function handleAnswerClick(answer) {
    selectedAnswer = answer;
    console.log(`Réponse sélectionnée: ${answer.text}`);
  }

  function handleSubmit() {
    if (selectedAnswer) {
      if (selectedAnswer.isCorrect) {
        console.log(`Bonne réponse: ${selectedAnswer.text}`);
       
      } else {
        console.log(`Mauvaise réponse: ${selectedAnswer.text}`);
        
      }
    } else {
      console.log('Aucune réponse sélectionnée.');
      
    }
  }
</script>

<main>
  <div class="top-section">
    <div class="theme-section">
      <label for="theme-select">Choix du thème :</label>
      <select id="theme-select" bind:value={selectedTheme} on:change={handleThemeChange}>
        {#each themes as theme}
          <option value={theme}>{theme}</option>
        {/each}
      </select>
    </div>
    <div class="question-section">
      <span>Question :</span>
      <div class="question-box">
      <!--   La question sera injectée ici -->
      </div>
    </div>
    <div class="score-section">
      <span>Scores :</span>
      <div class="score-box">
   <!--  Le score sera injecté ici -->
      </div>
    </div>
  </div>
  <div class="hint-section">
    <button on:click={() => hint = "Voici un indice pour la question."}>Veux-tu un indice ?</button>
    <div class="hint-box">{hint}</div>
  </div>
  <div class="answers-section">
    {#each answers as answer}
      <button
        class:selected={answer === selectedAnswer}
        on:click={() => handleAnswerClick(answer)}
      >
        {answer.text}
      </button>
    {/each}
  </div>
  <div class="validation-section">
    <button on:click={handleSubmit} type="button">VALIDER</button>
  </div>
</main>

<style>


 
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
