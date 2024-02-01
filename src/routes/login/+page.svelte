<script>
  // Exportation de la variable 'form'.
  // Cette variable est destinée à être passée au composant depuis un parent ou un gestionnaire d'état.
  export let form;
  // Affichage de la variable 'form' dans la console pour le débogage.
  console.log(form);
</script>

<main>
  <!-- Container principal pour le formulaire de connexion -->
  <div class="login-container">
      <!-- Début du formulaire avec la méthode POST pour envoyer les données du formulaire -->
      <form method="post" class="login-form">
          <!-- Titre du formulaire -->
          <h2>Connexion</h2>

          <!-- Groupe de formulaire pour l'email -->
          <div class="form-control">
              <label for="email">Email</label> <!-- Étiquette pour le champ email -->
              <input type="email" id="email" name="email" required> <!-- Champ de saisie pour l'email, requis et de type email pour une validation automatique du format email -->
          </div>

          <!-- Groupe de formulaire pour le mot de passe -->
          <div class="form-control">
              <label for="password">Mot de passe</label> <!-- Étiquette pour le champ mot de passe -->
              <input type="password" id="password" name="password" required> <!-- Champ de saisie pour le mot de passe, de type password pour masquer la saisie -->
          </div>

          <div class="form-control">
              <!-- Bouton pour soumettre le formulaire -->
              <button type="submit">Se connecter</button>

              <!-- Affichage conditionnel d'un message d'erreur -->
              {#if form && form.error}
                  <!-- Si 'form' est défini et contient une propriété 'error', afficher le message d'erreur -->
                  <p class="error">{form.error}</p>
              {/if}
              <!-- Lien vers la page de récupération du mot de passe -->
              <a href="password-forgot">Mot de passe oublié?</a>
          </div>
      </form>
  </div>
</main>
