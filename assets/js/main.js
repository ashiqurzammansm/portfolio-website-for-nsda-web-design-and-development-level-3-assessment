/* Vanilla JS only — no JS frameworks */
(function(){
  'use strict';

  // Navbar toggler for mobile (since we aren't using Bootstrap JS)
  const navToggleBtn = document.querySelector('[data-js="nav-toggle"]');
  const navMenu = document.getElementById('navMenu');
  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', function(){
      navMenu.classList.toggle('show');
    });
  }

  // Current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  // Contact form validation and fake submit
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      if (alertBox) {
        alertBox.className = 'alert alert-success';
        alertBox.textContent = 'Thanks! Your message has been sent (demo).';
      }
      form.reset();
      form.classList.remove('was-validated');
    });
  }

  // Simple testimonial rotation (progressively enhanced)
  const testimonials = document.getElementById('testimonials');
  if (testimonials) {
    const cards = testimonials.querySelectorAll('.col-md-4');
    let i = 0;
    setInterval(() => {
      cards.forEach((c, idx) => c.style.opacity = (idx === i ? '1' : '0.4'));
      i = (i + 1) % cards.length;
    }, 4000);
  }
})();
