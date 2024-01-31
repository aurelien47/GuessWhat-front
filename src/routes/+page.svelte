
<script>
  
  export let data;

  let scores = [];

  console.log(data.themes)

  async function handleChange(event) {
    console.log('on change de thèmes', event.target.value);

    const themeId = event.target.value;

    const result = await fetch(`https://guesswhat-api.onrender.com/theme/${themeId}/leaderboard`);

     scores = await result.json();
    console.log(`les scores pour le thème ${event.target.value}`, scores)
    
  }

    let lignes = new Array(3).fill({id: "—", score: "—", rank: "—"});

   import { goto } from '$app/navigation';

  function playGame() {
     goto('/game/visiteur'); 
   }
  
  </script>

<main>
   <section id="theme-selector">
    <label for="theme_select">Choisissez un thème :</label>
    <select on:change={handleChange} name="theme" id="theme_select">
      <option> -- Choisissez un thème --</option>
      {#each data.themes as theme, i}
        <option value="{theme.id}">{theme.name}</option>
      {/each}
    </select>
  </section>

  <section id="scoreboard">
    <h2>Top 3 Scores</h2>
    <table>
      <thead>
        <tr>
          <th>Rang</th>
          <th>Pseudo</th> <!-- Colonne ajoutée pour les pseudos -->
          <th>Score</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {#each scores as score, index}
          <tr>
            <td>{index + 1}</td>
            <td>{score.player.username}</td> <!-- Affichage des pseudos ici -->
            <td>{score.score}</td>
            <td>{new Date(score.createdAt).toLocaleString('fr-FR', {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric"
            })}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>
  
    <h1>Devinettes pour développeur fullstack</h1>

      <p>🚀 Bienvenue sur <a href="/" class="nomjeux">Guess What</a> – Le Fruit de Notre Passion pour le Développement web!
        🚀Chers utilisateurs,Nous sommes quatre développeurs passionnés, unis par notre amour pour la technologie et les défis intellectuels. 
        Guess What est le projet d'apothéose de notre parcours de <a href="https://oclock.io/formations/developpeur-web-fullstack-javascript" class="nomjeux">formation</a> à l'école <a href="https://oclock.io/" class="nomjeux">O'clock</a>, une célébration de nos compétences en développement et de notre créativité.
        🧩 Découvrez des énigmes conçues avec soin, où chaque détail est un clin d'œil à l'univers du développement. 
        👥 Vivez une aventure collaborative, inspirée par notre propre expérience en tant qu'équipe.
        💡 Testez vos connaissances sur le HTML, CSS & JAVASCRIPT, affûtez votre logique et partagez le plaisir de résoudre des devinettes captivantes.
        Ce jeu est notre rêve devenu réalité, une invitation à explorer le monde fascinant du développement à travers le prisme ludique des devinettes.
         Prêts à coder votre chemin à travers les énigmes? Que l'aventure commence!"</p>
        
  
      <button id="playButton" on:click={playGame}>Jouer</button> 
      
    
  </main>
  
