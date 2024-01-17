<main>
  <div class="form-container">
    <form action="inscription" method="post" class="inscription-form">
      <h1>Inscription</h1>
      <div class="form-group">
        <label for="pseudo">Pseudo</label>
        <input type="text" id="pseudo" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" name="password" required>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirmation du mot de passe</label>
        <input type="password" id="confirm-password" name="confirm_password" required>
      </div>
      <button type="submit">Créer un compte</button>
    </form>
  </div>
</main>