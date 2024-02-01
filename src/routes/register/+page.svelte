<main>
  <!-- Container principal pour le formulaire d'inscription -->
  <div class="form-container">
    <!-- Début du formulaire avec la méthode POST pour envoyer les données du formulaire -->
    <form method="post" class="inscription-form">
      <!-- Titre du formulaire -->
      <h1>Inscription</h1>

      <!-- Groupe de formulaire pour le pseudo -->
      <div class="form-group">
        <label for="pseudo">Pseudo</label> <!-- Étiquette pour le champ pseudo -->
        <input type="text" id="pseudo" name="username" required> <!-- Champ de saisie pour le pseudo, requis pour le formulaire -->
      </div>

      <!-- Groupe de formulaire pour l'email -->
      <div class="form-group">
        <label for="email">Email</label> <!-- Étiquette pour le champ email -->
        <input type="email" id="email" name="email" required> <!-- Champ de saisie pour l'email, requis et de type email pour une validation automatique du format email -->
      </div>

      <!-- Groupe de formulaire pour le mot de passe -->
      <div class="form-group">
        <label for="password">Mot de passe</label> <!-- Étiquette pour le champ mot de passe -->
        <input type="password" id="password" name="password" required> <!-- Champ de saisie pour le mot de passe, de type password pour masquer la saisie -->
      </div>

      <!-- Groupe de formulaire pour la confirmation du mot de passe -->
      <div class="form-group">
        <label for="confirm-password">Confirmation du mot de passe</label> <!-- Étiquette pour le champ de confirmation du mot de passe -->
        <input type="password" id="confirm-password" name="passwordConfirm" required> <!-- Champ de saisie pour la confirmation du mot de passe, également masqué -->
      </div>

      <!-- Bouton pour soumettre le formulaire -->
      <button type="submit">Créer un compte</button>
    </form>
  </div>
</main>
