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

// Validación simple de formulario
const formulario = document.querySelector('form');

if (formulario) {
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
    formulario.reset();
  });
}

// Slider (si deseas usar uno dinámico, aquí iría un Swiper o Flickity)
// Por ahora, dejamos preparado el código para futura implementación.
