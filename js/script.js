document.addEventListener('DOMContentLoaded', () => {
   
    const burgerMenu = document.getElementById('burgerMenu');
    const nav = document.getElementById('topNav');

    burgerMenu.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
    });

    const navLinks = nav.getElementsByTagName('a');
    for (const i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
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

            if(email.trim() === '' || password.trim() === '') {
                alert('Veuillez remplir tous les champs.');
            } else {
                console.log('Formulaire prêt à être envoyé');
               
            }
        });
    }
});
