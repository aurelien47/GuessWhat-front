// Importation de la fonction 'redirect' depuis '@sveltejs/kit'.
// Cette fonction est utilisée pour rediriger l'utilisateur vers une autre page.
import { redirect } from '@sveltejs/kit';

// Exportation de la fonction 'load'.
// Dans SvelteKit, 'load' est une fonction spéciale utilisée pour charger des données avant le rendu d'un composant.
export function load({ cookies }) {
    // Récupération du token depuis les cookies.
    // Ce token est généralement utilisé pour l'authentification de l'utilisateur.
    const token = cookies.get("token");

    // Si aucun token n'est trouvé, redirige l'utilisateur vers la page de connexion.
    // Le code de statut HTTP 307 est utilisé pour une redirection temporaire.
    if (!token) {
        redirect(307, '/login');
    }

    // Affichage du token pour le débogage. Utile pour vérifier que le token est correctement récupéré des cookies.
    console.log(cookies.get("token"));

    // Retourne un objet vide pour le moment.
    // Ce code semble être un placeholder pour des données futures qui pourraient provenir du backend.
    return {
        // user: {
        //     // données qui viennent du back
        // }
    };
}
