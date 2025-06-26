ScrollReveal({
        reset: false,
        distance: '50px',
        duration: 1000,
        delay: 200
    });

    // Animate captions
    ScrollReveal().reveal('.carousel-caption span', { origin: 'top' });
    ScrollReveal().reveal('.carousel-caption h5', { origin: 'left', delay: 300 });
    ScrollReveal().reveal('.carousel-caption p', { origin: 'right', delay: 400 });
    ScrollReveal().reveal('.carousel-caption a', { origin: 'bottom', delay: 500, interval: 200 });

    // Exports section

    ScrollReveal({
  reset: true,               // Animates every time you scroll (set to false for once)
  distance: '60px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.exports-info', { origin: 'left' });
ScrollReveal().reveal('.card', { origin: 'bottom', delay: 300 });
ScrollReveal().reveal('.price-info', { origin: 'right', delay: 400 });

// Finish Section
  const sr = ScrollReveal({
    distance: '50px',
    duration: 800,
    easing: 'ease-out',
    reset: false,  // set true if you want it to re-animate on every scroll
  });

  // Animate the heading and paragraph
  sr.reveal('.finished-project h2', { origin: 'left' });
  sr.reveal('.finished-project p', { origin: 'right', interval: 100 });

  // Animate each .finish-content block (icons + numbers + paragraphs)
  sr.reveal('.finish-content', { origin: 'bottom', interval: 150 });

  // Animate the image on the right side
  sr.reveal('.finished-project img', { origin: 'right', delay: 200 });

  // Choose section
  ScrollReveal().reveal('.choose-section .text-center', {
        delay: 200,
        origin: 'top',
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        reset: false
    });

    // Reveal each card one by one
    ScrollReveal().reveal('.choose-content', {
        interval: 200, // 200ms delay between each card
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        easing: 'ease-out',
        reset: false
    });

    // Tradition section
    ScrollReveal().reveal('.tradition-section .tradition-content img', {
        origin: 'left',
        distance: '60px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: false
    });

    // Animate the text content from the right
    ScrollReveal().reveal('.tradition-section .tradition-content h2, .tradition-section .tradition-content p, .tradition-section .tradition-info li, .tradition-section .tradition-btn', {
        origin: 'right',
        distance: '60px',
        duration: 1000,
        delay: 300,
        interval: 100, // nice stagger effect for the list
        easing: 'ease-in-out',
        reset: false
    });

    // Services section
    ScrollReveal({
        reset: false, // true if you want animations every time they re-enter viewport
        distance: '60px',
        duration: 1000,
        delay: 100,
    });

    // Animate section title and subtitle
    ScrollReveal().reveal('.services-section h2', { origin: 'top' });
    ScrollReveal().reveal('.services-section p', { origin: 'bottom', delay: 200 });

    // Animate the tab buttons
    ScrollReveal().reveal('.nav-pills .nav-link', { origin: 'left', interval: 100 });

    // Animate each tab content (tab-section inside each tab-pane)
    ScrollReveal().reveal('.tab-section h2', { origin: 'top', delay: 100 });
    ScrollReveal().reveal('.tab-section p', { origin: 'bottom', delay: 200 });
    ScrollReveal().reveal('.feature-list li', { origin: 'left', interval: 100, delay: 300 });
    ScrollReveal().reveal('.tabs-btn', { origin: 'bottom', delay: 500 });

    // Work section

    ScrollReveal().reveal('.work-section h2', {
    origin: 'bottom',
    distance: '20px',
    duration: 800,
    delay: 100,
    opacity: 0,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.work-section p', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 200,
    opacity: 0,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.work-info', {
    origin: 'left',
    distance: '40px',
    duration: 1000,
    interval: 200,
    opacity: 0,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.work-content img', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    delay: 300,
    opacity: 0,
    easing: 'ease-in-out'
  });

  // work section
  ScrollReveal({ 
    reset: false,         // Only animates once
    distance: '50px',     
    duration: 1000,       
    easing: 'ease-in-out'
  });

  // Reveal help-info container
  ScrollReveal().reveal('.help-info', {
    origin: 'bottom'
  });

  // Reveal each button separately with a delay
  ScrollReveal().reveal('.btn-work-1', {
    origin: 'left',
    delay: 200
  });

  ScrollReveal().reveal('.btn-work-2', {
    origin: 'right',
    delay: 400
  });

  // About section
  ScrollReveal().reveal('.faq-item', {
      distance: '40px',
      origin: 'bottom',
      duration: 800,
      interval: 120
    });
    ScrollReveal().reveal('.about-info', {
      distance: '60px',
      origin: 'right',
      duration: 900,
      delay: 200
    });