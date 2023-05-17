
export default function initPageLoad() {
  
  //CREATING ELEMENTS
  let headerdiv = document.createElement('div');
  let header = document.createElement('header');
  let backheader = document.createElement('div');

  let navbar = document.createElement('nav');
  let homeButton = document.createElement('button');
  let menuButton = document.createElement('button');
  let contactButton = document.createElement('button');

  let maindiv = document.createElement('div');
  let footer = document.createElement('footer');

  //ADDING CLASSES
  backheader.classList.add('back');
  headerdiv.classList.add('headerdiv');

  navbar.classList.add('navbar');

  homeButton.classList.add('navbutton');
  menuButton.classList.add('navbutton');
  contactButton.classList.add('navbutton');

  homeButton.setAttribute('id','homeButton');
  menuButton.setAttribute('id','menuButton');
  contactButton.setAttribute('id','contactButton');

  homeButton.classList.add('bselected');

  maindiv.classList.add('maindiv');
  maindiv.setAttribute('id','maindiv');


  //ADDING TEXT
  header.innerHTML = 'Il Fornaio'
  homeButton.innerHTML = 'Sobre nosotros';
  menuButton.innerHTML = 'Menú';
  contactButton.innerHTML = 'Contacto';
  footer.innerHTML = 'Made by @fanofrisoni'

  //APPENDING
  headerdiv.appendChild(backheader);
  backheader.appendChild(header);
  navbar.append(homeButton,menuButton,contactButton);
  
  //FINAL APPEND
  document.getElementById('content').append(headerdiv,navbar,maindiv,footer);

  return 'Loading page...';
};