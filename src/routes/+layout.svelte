<script>
  import logo from '$lib/assets/images/Logo Guess What.png'; // Importation de l'image du logo et des styles CSS.
  import '$lib/css/styles.css';
  import { jwtDecode } from "jwt-decode";

  export let data; // Exportation de la variable 'data' pour la rendre accessible depuis le parent.
  let isLogged; // Variable pour déterminer si l'utilisateur est connecté.
  let username = ""; // Variable pour stocker le pseudo de l'utilisateur.

  // Vérification du token pour déterminer si l'utilisateur est connecté.
  if(data.token) {
    isLogged = true;
    // Bloc de code pour décoder le token JWT et récupérer le nom d'utilisateur.
    try {
      const decodedToken = jwtDecode(data.token);
      username = decodedToken.username || ""; // Récupération du pseudo depuis le token décodé.
    } catch (error) {
      console.error('Erreur lors du décodage du token : ', error);
    }
  }

  // Fonction pour activer ou désactiver le menu de navigation.
  function toggleMenu() {
    const nav = document.getElementById('topNav');
    nav.classList.toggle('nav-active');
  }

  // Fonction pour fermer le menu de navigation sur les appareils mobiles.
  function toggleNav() {
    const nav = document.getElementById('topNav');
    if (window.innerWidth <= 768) { // Si la largeur de la fenêtre est inférieure à 768px.
      nav.classList.remove('nav-active');
    }
  }
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" type="image/png">
</svelte:head>



<header>
  <img src={logo} alt="Logo" id="logo"> <!-- Affichage du logo -->
  <button id="burgerMenu" on:click={toggleMenu}>☰</button> <!-- Bouton du menu burger -->
  <nav id="topNav">
    {#if isLogged}
      <span>Bienvenue {username}</span>
    {/if}
    <a on:click={toggleNav} href="/">Accueil</a> <!-- Lien vers la page d'accueil -->
    {#if !isLogged} <!-- Condition pour afficher les liens selon le statut de connexion -->
    <a on:click={toggleNav} href="/login">Connexion</a>
    <a on:click={toggleNav} href="/register">Inscription</a>
    {:else}
    <a on:click={toggleNav} href="/profil">Profil</a>
    <a on:click={toggleNav} href="/game/connecter">Game</a>
    <a on:click={toggleNav} href="/scores">Scores</a>

    <form action="/logout" method="post">
      <button type="submit">Déconnexion</button> <!-- Bouton de déconnexion -->
    </form>
    {/if}
  </nav>
</header>
<slot> </slot> <!-- Emplacement pour insérer d'autres composants ou du contenu HTML -->

<footer>
  <a href="contact.html">Contact</a> <!-- Lien vers la page de contact -->
  <a href="legal.html">Légale</a> <!-- Lien vers les mentions légales -->
  <a href="cgu.html">CGU</a> <!-- Lien vers les conditions générales d'utilisation -->
</footer>
