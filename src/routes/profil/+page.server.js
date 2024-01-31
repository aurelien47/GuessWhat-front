import { redirect } from '@sveltejs/kit';

// décode le token pour récupérer l'id utilisateur
import { jwtDecode } from "jwt-decode";


export async function load({ cookies }) {


const token = cookies.get("token");
if (!token) {
	
    redirect(303, '/');
}
// decodage token

const decoded = jwtDecode(token);

//console.log(decoded);
// fin decodage token

    console.log(cookies.get("token"));

// affichage des infos du profil

const affprofil = await fetch (`https://guesswhat-api.onrender.com/user/profile/${decoded.id}`, {
           method: "GET",
           headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
			"Authorization": "Bearer " + token
          },                     
        });
        const resultprofil = await affprofil.json();
        console.log(resultprofil);
  
	return {
		user:resultprofil
	};
	
}
// fin affichage des infos du profil

 