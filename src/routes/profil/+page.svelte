<script>
    export let data;

    
</script>
    

<main>
    
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
                    <li>{data.user.createdAt}</li>
                </ul>   
                           

        <button id="changemdp">Changer de mot de passe</button>
    </section>    
</main>