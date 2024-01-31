
<script>
  
  export let data;

  let scores = [];
  let isSelected = false;
  async function handleChange(event) {
    isSelected = true;
    const themeId = event.target.value;

    const result = await fetch(`https://guesswhat-api.onrender.com/user/theme/${themeId}/play`, {
      headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${data.token}` 
    }
    });

     const maxScores= await result.json();
     console.log(maxScores)
     scores = maxScores;

  }
  
  </script>

<main>
   <section id="theme-selector">
    <label for="theme_select"> Choisissez un thème :</label>
    <select on:change={handleChange} name="theme" id="theme_select">
      <option> -- Choisissez un thème --</option>
      {#each data.themes as theme, i}
        <option value="{theme.id}">{theme.name}</option>
      {/each}
    </select>
  </section>

  <section id="scoreboard">
    <h2>Top Scores</h2>
    <table>
      <thead>
        <tr>
          <th>Rang</th>
          <th>Pseudo</th> <!-- Colonne ajoutée pour les pseudos -->
          <th>Score</th>
        
          <th>nbr indice</th>
          <th>nbr erreur</th>
        </tr>
      </thead>
      <tbody>
        {#if scores[0]}
        {#each scores as score, index}
          <tr>
            <td>{index + 1}</td>
            <td>{score.player.username}</td> <!-- Affichage des pseudos ici -->
            <td>{score.maxScore}</td>
           
            <td>{score.count_indicators}</td>
            <td>{score.errors}</td>
          </tr>
        {/each}
        {:else if isSelected && !scores[0] }
          <p>Aucun score enregistrer pour ce thème</p>
        {/if}
      </tbody>
    </table>
  </section>
  
  
    
  </main>
  
