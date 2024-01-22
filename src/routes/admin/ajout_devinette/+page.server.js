import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {

const token = cookies.get("token");
if (!token) {
    redirect(303, '/');
}

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