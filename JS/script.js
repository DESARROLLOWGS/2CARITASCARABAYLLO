// Scroll suave para navegación
const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const seccion = document.querySelector(this.getAttribute('href'));
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Validación simple del formulario
const formulario = document.querySelector('form');

if (formulario) {
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
    formulario.reset();
  });
}

// Menú responsive tipo hamburguesa
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}
