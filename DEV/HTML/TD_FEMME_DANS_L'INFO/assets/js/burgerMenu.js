const menuBurger = document.getElementById('burger_menu');
const navBar = document.getElementById('navbar');

menuBurger.addEventListener('click', () => {
  navBar.classList.toggle('active');
});