<script>
  import logo from '$lib/assets/images/Logo Guess What.png';
import '$lib/css/styles.css';
export let data;
let isLogged;
if(data.token) {
  isLogged = true
}else{
  isLogged = false
}
function toggleMenu() {
  const nav = document.getElementById('topNav');

  nav.classList.toggle('nav-active');
}

function toggleNav() {
  const nav = document.getElementById('topNav');
  if (window.innerWidth <= 768) {
               
                nav.classList.remove('nav-active');
            }
}


</script>
  <header>
    <img src={logo} alt="Logo" id="logo">
    <button id="burgerMenu" on:click={toggleMenu}>☰</button>
    <nav id="topNav">
      <a on:click={toggleNav} href="/">Accueil</a>
      {#if !isLogged}
      <a on:click={toggleNav} href="/login">Connexion</a>
      <a on:click={toggleNav} href="/register">Inscription</a>
      {:else}
      <a on:click={toggleNav} href="/profil">Profil</a>
      <a on:click={toggleNav} href="/game/connecter">Game</a>
      <a on:click={toggleNav} href="/scores">Scores</a>
      <form action="/logout" method="post">
        <button type="submit">Déconnexion</button>
      </form>
      {/if}
    </nav>
  </header>
  <slot> </slot>         


  <footer>
    <a href="contact.html">Contact</a>
    <a href="legal.html">Légale</a>
    <a href="cgu.html">CGU</a>
  </footer>