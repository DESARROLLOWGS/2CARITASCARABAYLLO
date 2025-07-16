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
    img: 'IMAGES/hero1.jpeg',
    title: 'Solidaridad que transforma vidas',
    subtitle: 'Ayudamos a quienes más lo necesitan.'
  },
  {
    img: 'IMAGES/hero2.jpg',
    title: 'Manos que construyen esperanza',
    subtitle: 'Unidos por los que más sufren.'
  },
  {
    img: 'IMAGES/hero3.jpeg',
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

//========================================================================== Slider Galería
const wrapper = document.querySelector('.galeria-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');
let index = 0;

function updateSlider() {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
  document.querySelectorAll('.dots span').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
});
updateSlider();

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = slide.querySelector('img').src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
// Swipe táctil para galería
let startX = 0;
let isSwiping = false;

wrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
});

wrapper.addEventListener('touchmove', (e) => {
  if (!isSwiping) return;
  const moveX = e.touches[0].clientX;
  const diff = startX - moveX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // swipe izquierda
      index = (index + 1) % slides.length;
    } else {
      // swipe derecha
      index = (index - 1 + slides.length) % slides.length;
    }
    updateSlider();
    isSwiping = false;
  }
});

wrapper.addEventListener('touchend', () => {
  isSwiping = false;
});
