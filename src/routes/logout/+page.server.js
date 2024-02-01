// Importation de la fonction 'redirect' depuis '@sveltejs/kit'.
// Cette fonction est utilisée pour rediriger l'utilisateur vers une autre page.
import { redirect } from '@sveltejs/kit';

// Exportation d'un objet 'actions' qui contient différentes actions pour le traitement des formulaires ou des requêtes.
export const actions = {
  // Définition de l'action par défaut ('default').
  default: async ({ cookies }) => {
    // Suppression du cookie nommé 'token'.
    // Cette action est généralement utilisée pour déconnecter l'utilisateur en supprimant son token d'authentification.
    cookies.delete('token', { path: '/' });

    // Redirection de l'utilisateur vers la page d'accueil.
    // Le code de statut HTTP 303 est utilisé pour indiquer une redirection "See Other".
    // Cette redirection est déclenchée après la suppression du cookie 'token'.
    throw redirect(303, '/');
  }
};
