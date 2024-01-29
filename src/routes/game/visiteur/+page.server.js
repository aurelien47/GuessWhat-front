import { redirect } from '@sveltejs/kit';

export async function load() {
    // Retire la vérification du token et la redirection
    // const token = cookies.get("token");
    // if (!token) {
    //     redirect(303, '/');
    // }
    // console.log(cookies.get("token"));

    const reponse = await fetch('https://guesswhat-api.onrender.com/themes', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const result = await reponse.json();
    console.log(result);

    return {
        themes: result
    };
};
