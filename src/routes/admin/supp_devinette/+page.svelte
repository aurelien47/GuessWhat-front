<script>
    let devinettes = [];
    export let data;
    console.log(data);

    async function getquestionfromtheme ( id ) { 
        console.log(id);
    const questions = await fetch (`https://guesswhat-api.onrender.com/theme/${id}`, {
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
        <form class="formsuppdevi" action="" method="">
            <ul>
                <li>
                    <label for="name">choisir un thème : </label>
                    <select on:change={(event)=>getquestionfromtheme(event.target.value)} name="" id="theme_select">
                        <option value="">choix theme</option>
                        {#each data.themes as theme , i}
                        <option value="{theme.id}">{theme.name}</option>
                        {/each}
                    </select>
                </li>
                
                <li>
                    <label for="name">choisir une devinette : </label>

                    {#each devinettes as devinette , i}
                    <textarea id="" name="" rows="5" cols="33">
                        {devinette.content}
                    </textarea>
                    
                    <button id="{devinette.id}">effacer</button>
                    {/each}

                </li>
                
            </ul>
        </form>
        
    </section>
  </main>