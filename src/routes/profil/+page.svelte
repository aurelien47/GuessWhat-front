<script>
    export let data;
    // modifier le format de la date récupérée
    let maDate = new Date(data.user.createdAt)
    maDate = maDate.toLocaleDateString("fr-FR")
    
</script>
    

<main class="utilisateurmain">
    
    <section class="profilutilisateur">
        <h1>Votre profil</h1>
            
                <ul class="util_profilutilisateur">
                    <li class="entete_profilutilisateur">Pseudo :</li>
                    <li>{data.user.username}</li>
                </ul>

                <ul class="util_profilutilisateur">
                    <li class="entete_profilutilisateur">Email :</li>
                    <li>{data.user.email}</li>
                </ul>

                <ul class="util_profilutilisateur">
                    <li class="entete_profilutilisateur">Date enregistrement :</li>
                    <li>{maDate}</li>
                </ul>   
                           
        <button id="changemdp">Changer de mot de passe</button>
    </section>
    
    
</main>