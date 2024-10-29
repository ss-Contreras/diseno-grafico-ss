// Scripts para interactividad y animaciones

// Smooth Scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Filtrado de Portafolio
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');
    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
        item.classList.add('animated', 'fadeIn');
      } else {
        item.style.display = 'none';
        item.classList.remove('animated', 'fadeIn');
      }
    });
  });
});

// Carousel de testimonios (si se desea implementar)

// Otras animaciones y scripts adicionales
