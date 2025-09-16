// Smooth scroll & active nav link highlight
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');

  function highlightActive() {
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    links.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if(section && scrollPosition >= section.offsetTop &&
         scrollPosition < section.offsetTop + section.offsetHeight) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightActive);
  highlightActive();

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target) {
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
