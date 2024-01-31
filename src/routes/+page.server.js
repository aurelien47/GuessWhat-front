import { redirect } from '@sveltejs/kit';

export async function load() {

  // affichage des thèmes dans la liste déroulante
  const reponse = await fetch ('https://guesswhat-api.onrender.com/themes', {
             method: "GET",
             headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },                     
          });
          const result = await reponse.json();

    
    return {
      themes:result
    };
  }