<script>
    export let data;
    export let form;
    console.log(data);
</script>
<main>
    <section id="gestion">
        <h2>Ajouter une devinette</h2>
        <form class="formadmin" action="" method="POST">
            <ul>
                <li>
                    <label for="name">choisir le thème : </label>
                    <select name="theme" id="theme_select">
                        {#each data.themes as  theme , i}
                        <option value="{theme.id}">{theme.name}</option>
                        {/each}
                    </select>
                </li>

                <li>
                    <label for="name">texte devinette : </label>
                    <textarea id="content" name="content" rows="5" cols="15">
                        
                    </textarea>
                </li>

                <li>
                    <label for="name">indice : </label>
                    <input type="text" id="indicator" name="indicator" />
                </li>

                <h3>Propositions de réponse</h3>

                <li>
                    <label for="name">Bonne réponse : </label>
                    <input type="text" id="rep1" name="is_good_answer" />
                    
                </li>
                <li>
                    <label for="name">Mauvaise réponse : </label>
                    <input type="text" id="rep2" name="is_good_answer" />
                    
                </li>
                <li>
                    <label for="name">Mauvaise réponse : </label>
                    <input type="text" id="rep3" name="is_good_answer" />
                    
                </li>
                <li>
                    <label for="name">Mauvaise réponse : </label>
                    <input type="text" id="rep4" name="is_good_answer" />
                    
                </li>
                <li>
                    <label for="name">Mauvaise réponse : </label>
                    <input type="text" id="rep5" name="is_good_answer" />
                    
                </li>
                <li>
                    <label for="name">Lien wiki : </label>
                    <input type="text" id="wiki" name="wiki" />
                    
                </li>
            </ul>

            {#if form && form.result.status === 'success'}
                <p class="succes">La devinette à bien été enregistrée</p>
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