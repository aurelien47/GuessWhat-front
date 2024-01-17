
<script>
  
    let lignes = new Array(3).fill({id: "—", score: "—", rank: "—"});
  

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
            <!-- Les lignes du tableau seront ajoutées ici par JavaScript -->
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
  
    
      <p>🚀 Bienvenue sur Guess What – Le Fruit de Notre Passion pour le Développement!
        🚀Chers utilisateurs,Nous sommes quatre développeurs passionnés, unis par notre amour pour la technologie et les défis intellectuels. 
        Guess What est le projet d'apothéose de notre parcours de formation, une célébration de nos compétences en développement et de notre créativité.
        🧩 Découvrez des énigmes conçues avec soin, où chaque détail est un clin d'œil à l'univers du développement. 
        👥 Vivez une aventure collaborative, inspirée par notre propre expérience en tant qu'équipe.
        💡 Testez vos connaissances, affûtez votre logique et partagez le plaisir de résoudre des puzzles captivants.
        Ce jeu est notre rêve devenu réalité, une invitation à explorer le monde fascinant du développement à travers le prisme ludique des devinettes.
         Prêts à coder votre chemin à travers les énigmes? Que l'aventure commence!"</p>
        
  
      <button id="playButton">Jouer</button>
    
  </main>
  
