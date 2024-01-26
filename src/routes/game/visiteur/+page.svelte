<script>
  export let data;

  import { onMount } from 'svelte';
  let selectedTheme = 'default';
  let themes = data.themes; 
  let questions = [];

  async function handleThemeChange(event) {
    selectedTheme = event.target.value;
    const response = await fetch(`https://guesswhat-api.onrender.com/theme/${selectedTheme}`);
    if (response.ok) {
      const data = await response.json();
      questions = data.riddles;
    }
  }

  async function checkAnswer(answer, questionId) {
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
    <div id={`answers-${question.id}`} class="answers-section">
      {#each question.answers as answer}
        <button on:click={() => checkAnswer(answer, question.id)}>{answer.content}</button>
      {/each}
    </div>
  {/each}
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
