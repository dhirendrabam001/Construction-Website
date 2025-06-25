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