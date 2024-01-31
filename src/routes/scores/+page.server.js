import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
  const token = cookies.get("token");
  if (!token) {
    redirect(303, '/');
  }
  console.log('token', token);
let themes = [];
  // affichage des thèmes dans la liste déroulante
  const reponse = await fetch ('https://guesswhat-api.onrender.com/themes', {
             method: "GET",
             headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },                     
          });
  if(reponse.ok) {
    themes = await reponse.json();
  }


  return {
    themes,
    token
  };
}
