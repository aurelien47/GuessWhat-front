<script>
    export let data;
    console.log(data);
</script>
<main>
    <section id="gestion">
        <h2>Ajouter une devinette</h2>
        <form class="formulaire" action="" method="POST">
            <ul>
                <li>
                    <label for="name">choisir le thème : </label>
                    <select name="" id="theme_select">
                        {#each data.themes as  theme , i}
                        <option value="{theme.id}">{theme.name}</option>
                        {/each}
                    </select>
                </li>

                <li>
                    <label for="name">texte devinette : </label>
                    <textarea id="content" name="story" placeholder="Lorem ipsum..." rows="5" cols="23">
                        Lorem ipsum...
                    </textarea>
                </li>

                <li>
                    <label for="name">indice : </label>
                    <input type="text" id="indicator" name="user_name" />
                </li>

                <h3>Propositions de réponse</h3>

                <li>
                    <label for="name">Bonne réponse : </label>
                    <input type="text" id="rep1" name="user_name" />
                    
                </li>
                <li>
                    <label for="name">Mauvaise réponse : </label>
                    <input type="text" id="rep2" name="user_name" />
                    
                </li>
                <li>
                    <label for="name">Mauvaise réponse : </label>
                    <input type="text" id="rep3" name="user_name" />
                    
                </li>
                <li>
                    <label for="name">Mauvaise réponse : </label>
                    <input type="text" id="rep4" name="user_name" />
                    
                </li>
                <li>
                    <label for="name">Mauvaise réponse : </label>
                    <input type="text" id="rep5" name="user_name" />
                    
                </li>
                <li>
                    <label for="name">Lien wiki : </label>
                    <input type="text" id="wiki" name="user_name" />
                    
                </li>
            </ul>
        </form>
        
        
        <button id="playButton">Valider</button>
    </section>
  </main>