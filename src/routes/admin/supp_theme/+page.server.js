import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {

const token = cookies.get("token");
if (!token) {
    redirect(303, '/');
}
// affichage des thème dans la liste déroulante
const reponse = await fetch ('https://guesswhat-api.onrender.com/themes', {
           method: "GET",
           headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },                     
        });
        const result = await reponse.json();
        //console.log(result);
  
	return {
		themes:result
	};
}
// fin affichage des thème dans la liste déroulante

// récupération de l'id du theme pour l'effacer


// Fin récupération de l'id du theme pour l'effacer
