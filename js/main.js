const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 70) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

