
export default function initPageLoad() {
  
  let headerdiv = document.createElement('div');
  let header = document.createElement('header');
  let backheader = document.createElement('div');

  backheader.classList.add('back');
  header.innerHTML = 'Il Fornaio'
  headerdiv.classList.add('headerdiv')

  headerdiv.appendChild(backheader);
  backheader.appendChild(header);
  
  document.getElementById('content').appendChild(headerdiv);

  return 'Loading page...';
};