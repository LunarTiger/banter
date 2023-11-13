let title = null;
let description = null;
let image = null;

addEventListener("DOMContentLoaded", () => {
  if(!window.isBanter){
    const meta = document.getElementsByTagName('meta'); console.log(meta);
    for (let i = 0; i < meta.length; i++) {
      switch(meta[i].attributes.property.value){
        case 'og:title': title = meta[i].attributes.content.value; break;
        case 'og:description': description = meta[i].attributes.content.value; break;
        case 'og:image': image = meta[i].content.attributes.value; break;
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
  switch(type){
    case 'img': el.src = html; el.width="800px"; el.height="auto"; el.style="max-width:100%"; break;
    case 'a': if(link){el.href = link; el.innerHTML = html;} break;
    default: el.innerHTML = html;
  }
  if(type == 'a'){let p = document.createElement('p'); p.appendChild(el); document.querySelector('body').appendChild(p);}
  else{document.querySelector('body').appendChild(el);}
}