<script>
    export let data;
    export let form; //pour message d'erreur
    console.log(data);
</script>
<main>
    <section id="gestion">
        <h2>Supprimer un thème</h2>
        <form class="formadmin" action="" method="post">
            <ul>
                <li>
                    <label for="name">choisir le thème : </label>
                    <select name="theme" id="theme_select">
                        {#each data.themes as  theme , i}
                        <option value="{theme.id}">{theme.name}</option>
                        {/each}
                    </select>
                </li>
            </ul>

            {#if form && form.result.status === 'success'}
                <p class="succes">Le thème à bien été effacé</p>
            {/if}

            {#if form && form.result.error}
                <p class="error">{form.result.error}</p>
            {/if}

            <button type="submit">Valider</button>
        </form>
        <aside>
           <p>Attention les questions du thème seront supprimées aussi!</p>
        </aside>
        
    </section>
  </main>