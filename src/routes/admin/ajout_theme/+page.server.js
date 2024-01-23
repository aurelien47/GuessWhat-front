export const actions = {
    default: async ({ request }) => {
        const data = await request.forData();
        const nametheme = data.get ('theme_name')

        const reponse = await fetch ('https://guesswhat-api.onrender.com/ajout_theme', {
           method: "POST",
           headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
           body:JSON.stringify({ 
            nametheme,
            })
           
        });

        const result = await reponse.json();
        console.log(result);
	}
};