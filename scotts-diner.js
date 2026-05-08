/* --- Navbar: add .scrolled class on scroll --- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    /* --- Hero parallax on scroll --- */
    const heroBg = document.getElementById('heroBg');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroBg.style.transform = `translateY(${scrolled * 0.35}px)`;
    }, { passive: true });

    /* --- Intersection Observer: scroll-reveal --- */
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    /* --- Mobile hamburger toggle (just scrolls to menu) --- */
    function toggleMenu(btn) {
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    }