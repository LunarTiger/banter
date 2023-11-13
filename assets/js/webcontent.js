let title = null;
let description = null;
let image = null;
let parent = 'body'

addEventListener("DOMContentLoaded", () => {
  if(!window.isBanter){
    const meta = document.getElementsByTagName('meta');
    if(document.getElementById('banter-info')){parent = 'banter-info';}
    for (let i = 0; i < meta.length; i++) {
      let this_property = null;
      let this_content = null;
      try{this_property = meta[i].attributes.property.value; this_content = meta[i].attributes.content.value;}catch{}
      finally{switch(this_property){
        case 'og:title': title = this_content; break;
        case 'og:description': description = this_content; break;
        case 'og:image': image = this_content; break;
      }}
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
    case 'img': el.src = html; el.setAttribute('width', 'auto'); el.setAttribute('height', 'auto'); el.setAttribute('style', 'max-width:100%;max-height:420px;'); break;
    case 'a': if(link){el.href = link; el.innerHTML = html;} break;
    default: el.innerHTML = html;
  }
  if(type == 'a'){let p = document.createElement('p'); p.appendChild(el); document.querySelector('body').appendChild(p);}
  else{document.querySelector(parent).appendChild(el);}
}