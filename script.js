const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');


window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});
