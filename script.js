// document.addEventListener('DOMContentLoaded', function() {
//     const menuIcon = document.getElementById('menuIcon');
//     const menu = document.getElementById('menu');

//     menuIcon.addEventListener('click', function() {
//         menu.classList.toggle('show');
//     });

//     const contactForm = document.getElementById('contactForm');

//     contactForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;

//         console.log('Nombre:', name);
//         console.log('Email:', email);
//         console.log('Mensaje:', message);

//         alert('Gracias por tu mensaje, ' + name + '. Nos pondremos en contacto contigo pronto.');
        
//         contactForm.reset();
//     });
// });

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}