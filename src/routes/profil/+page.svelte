<script>
    // Exportation de la variable 'data', qui permet de recevoir des données depuis le composant parent.
    export let data;

    // Conversion de la date de création de l'utilisateur en un format de date localisé.
    // 'data.user.createdAt' est la date de création de l'utilisateur obtenue depuis 'data'.
    let maDate = new Date(data.user.createdAt);
    // Formatage de cette date au format local français ('fr-FR').
    maDate = maDate.toLocaleDateString("fr-FR");
</script>

<main class="utilisateurmain">
    <!-- Section pour afficher le profil de l'utilisateur -->
    <section class="profilutilisateur">
        <h1>Votre profil</h1>
        
        <!-- Liste des informations de l'utilisateur -->
        <ul class="util_profilutilisateur">
            <!-- Affichage du pseudo de l'utilisateur -->
            <li class="entete_profilutilisateur">Pseudo :</li>
            <li>{data.user.username}</li>
        </ul>

        <ul class="util_profilutilisateur">
            <!-- Affichage de l'email de l'utilisateur -->
            <li class="entete_profilutilisateur">Email :</li>
            <li>{data.user.email}</li>
        </ul>

        <ul class="util_profilutilisateur">
            <!-- Affichage de la date d'enregistrement de l'utilisateur, formatée en français -->
            <li class="entete_profilutilisateur">Date enregistrement :</li>
            <li>{maDate}</li>
        </ul>   

        <!-- Bouton pour changer de mot de passe (fonctionnalité non implémentée dans ce snippet) -->
        <button id="changemdp">Changer de mot de passe</button>
    </section>
</main>
