let title = null;
let description = null;
let image = null;

addEventListener("DOMContentLoaded", () => {
  if(!window.isBanter){
    const meta = document.getElementsByTagName('meta');
    for (let i = 0; i < meta.length; i++) {
      switch(meta[i].property){
        case 'og:title': title = meta[i].content; break;
        case 'og:description': description = meta[i].content; break;
        case 'og:image': image = meta[i].content; break;
      }
    }
    if(title){makeElement('h1', title);}
    if(image){makeElement('img', image);}
    if(description){makeElement('h3', description);}
    makeElement('a', 'open in Banter', 'banter://'+window.location.hostname+window.location.pathname);
    makeElement('a', 'my Banter spaces', 'https://lunartiger.github.io/banter');
  }
});

function makeElement(type, html, link) {
  if(!type || !html){return;}
  let el = document.createElement(type);
  let p = null;
  switch(type){
    case 'img': el.src = html; el.width="800px"; el.height="auto"; el.style="max-width:100%"; break;
    case 'a': if(link){el.href = link; el.innerHTML = html; let p = document.createElement('p'); p.appendChild(el);} break;
    default: el.innerHTML = html;
  }
  if(p){document.querySelector('body').appendChild(p);}
  else{document.querySelector('body').appendChild(el);}
}