<script>
    let devinettes = [];
    export let data;
    console.log(data);

    async function getquestionfromtheme ( id ) { 
        console.log(id);
    const questions = await fetch (`https://guesswhat-api.onrender.com/themes/${id}`, {
    method: "GET",
    
    headers: {
     "Content-Type": "application/json",
     'Access-Control-Allow-Origin': '*',
     // 'Content-Type': 'application/x-www-form-urlencoded',
   }, 
 });
 const result_questions = await questions.json();
 console.log(result_questions);


devinettes=result_questions.riddles


}

</script>
<main>
    <section id="gestion">
        <h2>Supprimer une devinette</h2>
        <form class="formulaire" action="" method="">
            <ul>
                <li>
                    <label for="name">choisir un thème : </label>
                    <select on:change={(event)=>getquestionfromtheme(event.target.value)} name="" id="theme_select">
                        {#each data.themes as theme , i}
                        <option value="{theme.id}">{theme.name}</option>
                        {/each}
                    </select>
                </li>

                <li>
                    <label for="name">choisir une devinette : </label>
                    <select name="" id="devinette_select">
                        <option value="">choix devinette</option>
                        {#each devinettes as  devinette , i}
                        <option value="{devinette.id}">{devinette.content}</option>
                        {/each}
                    </select>
                </li>
            </ul>
        </form>
        <button id="playButton">Valider</button>
    </section>
  </main>