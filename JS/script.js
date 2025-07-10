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

// Slider automático para HERO con transición fade
const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

const heroSlides = [
  {
    img: 'images/hero1.jpg',
    title: 'Solidaridad que transforma vidas',
    subtitle: 'Ayudamos a quienes más lo necesitan.'
  },
  {
    img: 'images/hero2.jpg',
    title: 'Manos que construyen esperanza',
    subtitle: 'Unidos por los que más sufren.'
  },
  {
    img: 'images/hero3.jpg',
    title: 'Tu ayuda cambia historias',
    subtitle: 'Sé parte de nuestra misión.'
  }
];

let currentSlide = 0;

function cambiarHero() {
  const { img, title, subtitle } = heroSlides[currentSlide];

  heroContent.classList.remove('visible');

  setTimeout(() => {
    heroSection.style.backgroundImage = `url('${img}')`;
    heroContent.innerHTML = `
      <h1>${title}</h1>
      <p>${subtitle}</p>
      <a href="#quienes-somos" class="btn">Conócenos</a>
    `;
    heroContent.classList.add('visible');
  }, 500);

  currentSlide = (currentSlide + 1) % heroSlides.length;
}

setInterval(cambiarHero, 5000);
window.addEventListener('load', cambiarHero);
