<script>
    export let data;
    export let form;
    console.log(data);
</script>
<main>
    <section id="gestion">
        <h2>Ajouter un thème</h2>
        <form class="formajouttheme" action="" method="POST">
            <ul>
                <li>
                    <label for="name">choisir un nom&nbsp;:</label>
                    <input type="text" id="themename" name="name" />
                </li>
            </ul>



            {#if form && form.result.status === 'success'}
                <p class="succes">Le theme à bien été enregistré</p>
            {/if}

            {#if form && form.result.error}
                <p class="error">{form.result.error}</p>
            {/if}


            <button type="submit">Valider</button>
        </form>
        
    </section>
  </main>

  <style>
    .error {
        color: red;
    }

    .succes {
        color: green;
    }
  </style>