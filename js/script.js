document.addEventListener('DOMContentLoaded', function() {
   
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

 
    const tbody = document.querySelector('#scoreboard tbody');

  
    for (let i = 0; i < 3; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td>—</td><td>—</td><td>—</td>'; 
        tbody.appendChild(tr);
    }

  
    function fillTableWithData(data) {
        const rows = tbody.querySelectorAll('tr');
        data.forEach((item, index) => {
            if (index < rows.length) {
                const cells = rows[index].querySelectorAll('td');
                cells[0].textContent = item.id;
                cells[1].textContent = item.score;
                cells[2].textContent = item.rank;
            }
        });
    }


});
