const menuBurger = document.getElementById('menu_burger');
const navBar = document.getElementById("navbar") 
const maListe = document.querySelector('#navbar ul');
let statuMenu = 0

menuBurger.addEventListener('click', () => {
  if (statuMenu == 0){
    statuMenu = 1
    maListe.style.fontSize = '16px'; 
    maListe.style.padding = '5px'; 
  }
  else{
    statuMenu = 0
    maListe.style.fontSize = '0px';
    maListe.style.padding = '0px'; 
  }
});