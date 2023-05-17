export default function homePageLoad() {
  //CREATING ELEMENTS
  let homegrid = document.createElement('div');
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3');
  let logoimg = document.createElement('div');

  //ADDING CLASSES
  homegrid.classList.add('homegrid');
  homegrid.setAttribute('id','homegrid');
  logoimg.classList.add('logoimg');
  h2.classList.add('h2home')
  h3.classList.add('h3home')
  //ADDING TEXT
  h2.innerHTML = "¡Comida, vino y compañía en tu Rincón de Italia en la ciudad de Chihuahua!";
  h3.innerHTML = "Restaurante Italiano con ambiente familiar y platillos exquisitos que se ha ido plasmando en Chihuahua como un lugar de comida casera y con gran sabor."
  //APPENDING
  homegrid.append(h2,h3,logoimg)
  //FINAL APPEND
  document.getElementById('maindiv').appendChild(homegrid);
  return 'Loading page...';
}
