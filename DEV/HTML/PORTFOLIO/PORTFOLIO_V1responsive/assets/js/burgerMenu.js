const svgBurger = `
  <path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"/>
  <path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"/>
  <path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"/>
`;

// Code SVG de la croix (fermeture)
const svgClose = `
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/>
`;

const menuBurger = document.getElementById('burgerMenu');
const maListe = document.querySelector('#navbar ul');
const eltListe = document.querySelectorAll('#navbar ul .listeelt');
const mainContent = document.querySelector("main")
const footer = document.querySelector("footer")
let statuMenu = 0;

if (menuBurger && maListe) {
  menuBurger.addEventListener('click', () => {
    if (statuMenu == 0) {
      statuMenu = 1;
      maListe.style.fontSize = '16px';
      footer.style.bottom ='-35vh'
      eltListe.forEach(elt => {
        elt.style.width = '140%'
        elt.style.borderWidth = '1px'
        elt.style.margin = '5% 10%';
        elt.style.padding = "10px 0"
        elt.style.borderBottomStyle = 'solid'
      });
      menuBurger.innerHTML = svgClose;
      mainContent.className = 'navactive';
    } else {
      statuMenu = 0;
      footer.style.bottom ='0vh'
      maListe.style.fontSize = '0';
      maListe.style.padding = '0'; 
      eltListe.forEach(elt => {
        elt.style.margin = '0 0';
        elt.style.padding = "0 0"
        elt.style.borderBottomStyle = 'none'
      });
      menuBurger.innerHTML = svgBurger;
      mainContent.className = 'mainContent';
    }
  });
}