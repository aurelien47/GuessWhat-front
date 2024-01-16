<script>
import logo from '$lib/assets/images/Logo Guess What.png';
import '$lib/css/styles.css';

function toggleMenu() {
  const nav = document.getElementById('topNav');
  nav.classList.toggle('nav-active');
}

</script>
  <header>
    <img src={logo} alt="Logo" id="logo">
    <button id="burgerMenu" on:click={toggleMenu}>☰</button>
    <nav id="topNav">
      <a href="/" class="active">Accueil</a>
      <a href="/login">Connexion</a>
      <a href="/register">Inscription</a>
    </nav>
  </header>
  <slot> </slot>         



  <footer>
    <a href="contact.html">Contact</a>
    <a href="legal.html">Légale</a>
    <a href="cgu.html">CGU</a>
  </footer>