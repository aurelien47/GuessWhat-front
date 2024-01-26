document.addEventListener('DOMContentLoaded', () => {
   
    document.getElementById('valider').addEventListener('click', () => {

        const reponses = [
            document.getElementById('reponse1').value,
            document.getElementById('reponse2').value,
            document.getElementById('reponse3').value,
            document.getElementById('reponse4').value,
            document.getElementById('reponse5').value,
        ];
        let scores = [
            { id: 1, score: 100, rank: 1 },
            { id: 2, score: 90, rank: 2 },
            { id: 3, score: 80, rank: 3 },
          ];
   
        console.log(reponses);
    });
      
    document.getElementById('indice').addEventListener('click', () => {
      
        console.log('Hint requested');
    });



    const burgerMenu = document.getElementById('burgerMenu');
    const nav = document.getElementById('topNav');

    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    const navLinks = nav.getElementsByTagName('a');
    for (const link of navLinks) {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('nav-active');
            }
        });
    }

    const tbody = document.querySelector('#scoreboard tbody');
    for (let i = 0; i < 3; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td>—</td><td>—</td><td>—</td>';
        tbody.appendChild(tr);
    }

    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;

            if (email.trim() === '' || password.trim() === '') {
                alert('Please fill in all fields.');
            } else {
                console.log('Form ready to be submitted');
            }
        });
    }
});
