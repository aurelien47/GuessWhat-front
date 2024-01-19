
import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request,cookies }) => {
		const data = await request.formData();
         const email = data.get ('email')
        const password = data.get ('password')


          

          const reponse = await fetch ('https://guesswhat-api.onrender.com/signin', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify({ 
          
              email,
              password,
          
            })
            
          });  

          const result = await reponse.json();
          console.log(result);

          cookies.set("token", result.token, {
              secure: true,
              httpOnly: true,
              path: '/'
          })

          redirect(303, '/');
          


        
	}
};