// Déclaration et exportation de la fonction 'load'.
// Cette fonction est spécifique à SvelteKit et est utilisée pour charger des données avant le rendu d'un composant.
export function load({cookies}) {
    // Extraction du token depuis les cookies.
    // 'cookies.get("token")' récupère la valeur du cookie nommé 'token'.
    // Cela est généralement utilisé pour la gestion de l'authentification.
    const token = cookies.get("token");
 
    // La fonction renvoie un objet avec le token.
    // Cet objet peut ensuite être utilisé dans les composants Svelte pour accéder au token.
    return {
      token
    };
}
