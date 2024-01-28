
<script>
  
    let lignes = new Array(3).fill({id: "—", score: "—", rank: "—"});

   import { goto } from '$app/navigation';

  function playGame() {
    goto('/game/visiteur'); 
  }


  

  </script>

<main>
    <section id="scoreboard">
        <h2>Top 3 Scores</h2>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Score</td>
              <td>Rang</td>
            </tr>
          </thead>
          <tbody>
          
          </tbody>
        </table>
        <table id="scoreboard">
          <tbody>
            {#each lignes as ligne}
              <tr>
                <td>{ligne.id}</td>
                <td>{ligne.score}</td>
                <td>{ligne.rank}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </section>
  
    
      <p>🚀 Bienvenue sur <a href="/">Guess What</a> – Le Fruit de Notre Passion pour le Développement web!
        🚀Chers utilisateurs,Nous sommes quatre développeurs passionnés, unis par notre amour pour la technologie et les défis intellectuels. 
        Guess What est le projet d'apothéose de notre parcours de <a href="https://oclock.io/formations/developpeur-web-fullstack-javascript">formation</a> à l'école <a href="https://oclock.io/">O'clock</a>, une célébration de nos compétences en développement et de notre créativité.
        🧩 Découvrez des énigmes conçues avec soin, où chaque détail est un clin d'œil à l'univers du développement. 
        👥 Vivez une aventure collaborative, inspirée par notre propre expérience en tant qu'équipe.
        💡 Testez vos connaissances sur le HTML, CSS & JAVASCRIPT, affûtez votre logique et partagez le plaisir de résoudre des devinettes captivantes.
        Ce jeu est notre rêve devenu réalité, une invitation à explorer le monde fascinant du développement à travers le prisme ludique des devinettes.
         Prêts à coder votre chemin à travers les énigmes? Que l'aventure commence!"</p>
        
  
      <button id="playButton" on:click={playGame}>Jouer</button>
      
    
  </main>
  
