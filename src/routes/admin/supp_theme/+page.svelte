<script>
    export let data;
    console.log(data);
</script>
<main>
    <section id="gestion">
        <h2>Supprimer un thème</h2>
        <form class="formulaire" action="" method="">
            <ul>
                <li>
                    <label for="name">choisir le thème : </label>
                    <select name="" id="theme_select">
                        {#each data.themes as  theme , i}
                        <option value="{theme.id}">{theme.name}</option>
                        {/each}
                    </select>
                </li>
            </ul>
        </form>
        <aside>
           <p>Attention les questions du thème seront supprimées aussi!</p>
        </aside>
        <button id="playButton">Valider</button>
    </section>
  </main>