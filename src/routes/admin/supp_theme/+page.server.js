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
        console.log(result);
  
	return {
		themes:result
	};
}
// fin affichage des thème dans la liste déroulante

// on efface le theme choisi
const effacetheme = await fetch ('https://guesswhat-api.onrender.com/admin/theme/${theme.id}', {
           method: "DELETE",
           headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },                     
        });
        const result = await effacetheme.json();
        console.log(result);
  
	return {result};
