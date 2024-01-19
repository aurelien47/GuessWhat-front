
<script>
  let selectedTheme = 'default'; // La valeur par défaut ou le premier thème
  const themes = ['Thème 1', 'Thème 2', 'Thème 3']; // Vos thèmes disponibles
  let hint = ''; // L'indice pour la question
  let answers = Array(5).fill(''); // Les réponses à initialiser

  // Fonction pour gérer le changement de thème
  function handleThemeChange(event) {
    selectedTheme = event.target.value;
    // Logique pour appliquer le thème
  }

  // Fonction pour gérer la soumission des réponses
  function handleSubmit() {
    // Logique pour valider et soumettre les réponses
  }
</script>

<main>
  <div class="top-section">
      <div class="theme-section">
          <label for="theme-select">Choix du thème</label>
          <select id="theme-select">
              <option value="theme1">Thème 1</option>
              <option value="theme2">Thème 2</option>
          </select>
      </div>
      <div class="question-section">
          <span>Question</span>
          <div class="question-box"></div>
      </div>
      <div class="score-section">
          <span>Scores</span>
          <div class="score-box"></div>
      </div>
  </div>
  <div class="hint-section">
      <button>Veux-tu un indice ?</button>
      <div class="hint-box"></div>
  </div>
  <div class="answers-section">
      <div class="answer">
          <span>Réponse 1</span>
          <div class="answer-box"></div>
      </div>
      <div class="answer">
          <span>Réponse 2</span>
          <div class="answer-box"></div>
      </div>
      <div class="answer">
          <span>Réponse 3</span>
          <div class="answer-box"></div>
      </div>
      <div class="answer">
          <span>Réponse 4</span>
          <div class="answer-box"></div>
      </div>
      <div class="answer">
          <span>Réponse 5</span>
          <div class="answer-box"></div>
      </div>
  </div>
  <div class="validation-section">
      <button>VALIDER</button>
  </div>
</main>