/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
        const username = data.get ('username')
        const email = data.get ('email')
        const password = data.get ('password')
        const passwordConfirm = data.get ('passwordConfirm')

        const reponse = await fetch ('https://guesswhat-api.onrender.com/signup', {
           method: "POST",
           headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
           body:JSON.stringify({ 
            username,
            email,
            password,
            passwordConfirm,
           })
           
        });

        const result = await reponse.json();
        console.log(result);
	}
};