<script>
  import logo from '$lib/assets/images/Logo Guess What.png';
import '$lib/css/styles.css';

function toggleMenu() {
  const nav = document.getElementById('topNav');
  // @ts-ignore
  nav.classList.toggle('nav-active');
}

function toggleNav() {
  const nav = document.getElementById('topNav');
  if (window.innerWidth <= 768) {
                // @ts-ignore
                nav.classList.remove('nav-active');
            }
}

</script>
  <header>
    <img src={logo} alt="Logo" id="logo">
    <button id="burgerMenu" on:click={toggleMenu}>☰</button>
    <nav id="topNav">
      <a on:click={toggleNav} href="/" class="active">Accueil</a>
      <a on:click={toggleNav} href="/login">Connexion</a>
      <a on:click={toggleNav} href="/register">Inscription</a>
      <a on:click={toggleNav} href="/profil">Profil</a>
    </nav>
  </header>
  <slot> </slot>         



  <footer>
    <a href="contact.html">Contact</a>
    <a href="legal.html">Légale</a>
    <a href="cgu.html">CGU</a>
  </footer>