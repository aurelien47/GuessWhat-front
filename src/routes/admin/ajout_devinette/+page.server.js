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

// Récupération des champs de la devinette

export const actions = {
  default: async ({ request,cookies }) => {
      const data = await request.formData();
      const theme = data.get ('theme')
      const name = data.get ('name')
      const content = data.get ('content')
      const indicator = data.get ('indicator')
      const is_good_answer = data.get ('is_good_answer')
      const wiki = data.get ('wiki')
      const token = cookies.get("token");
      const reponse = await fetch (`https://guesswhat-api.onrender.com/admin/theme/${theme}/riddle`, {
         method: "POST",
         headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
          "Authorization": "Bearer " + token
        },
         body:JSON.stringify({ 
          name,
          content,
          indicator,
          is_good_answer,
          wiki,
          })
         
      });

      const result = await reponse.json();
      console.log(result);
}
};