document.addEventListener('DOMContentLoaded', () => {
    // Gestion du menu burger
    var burgerMenu = document.getElementById('burgerMenu');
    var nav = document.getElementById('topNav');

    burgerMenu.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
    });

    var navLinks = nav.getElementsByTagName('a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('nav-active');
            }
        });
    }

    // Pré-remplissage du tableau des scores
    const tbody = document.querySelector('#scoreboard tbody');
    for (let i = 0; i < 3; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td>—</td><td>—</td><td>—</td>';
        tbody.appendChild(tr);
    }

    // Ajout de la logique pour le formulaire de connexion
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche la soumission normale du formulaire

            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;

            if(email.trim() === '' || password.trim() === '') {
                alert('Veuillez remplir tous les champs.');
            } else {
                console.log('Formulaire prêt à être envoyé');
                // Ici, envoyez les données à votre serveur si nécessaire
                // loginForm.submit(); // Décommentez pour soumettre le formulaire
            }
        });
    }
});
