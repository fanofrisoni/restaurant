import initPageLoad from "./initial-page-load";
import homePageLoad from "./homeLoad";
import menuPageLoad from "./menuLoad";
import aboutPageLoad from "./aboutLoad";
import './style.css';

initPageLoad();
homePageLoad();

document.getElementById('homeButton').addEventListener('click',() => {
  if(!document.getElementById('homeButton').hasAttribute('bselected')){
    document.getElementById('homeButton').classList.add('bselected');
    document.getElementById('menuButton').classList.remove('bselected');
    document.getElementById('contactButton').classList.remove('bselected');
    homePageLoad();
  }
  window.scrollTo({ top: 330, behavior: 'smooth' });
})

document.getElementById('menuButton').addEventListener('click',() => {
  if(!document.getElementById('menuButton').hasAttribute('bselected')){
    document.getElementById('menuButton').classList.add('bselected');
    document.getElementById('homeButton').classList.remove('bselected');
    document.getElementById('contactButton').classList.remove('bselected');
    menuPageLoad()
  }
  window.scrollTo({ top: 330, behavior: 'smooth' });
})

document.getElementById('contactButton').addEventListener('click',() => {
  if(!document.getElementById('contactButton').hasAttribute('bselected')){
    document.getElementById('contactButton').classList.add('bselected');
    document.getElementById('menuButton').classList.remove('bselected');
    document.getElementById('homeButton').classList.remove('bselected');
    aboutPageLoad();
  }
  window.scrollTo({ top: 330, behavior: 'smooth' });
})