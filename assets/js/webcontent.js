// get an array of the user set properties
const currentScript = Array.from(document.getElementsByTagName('script')).slice(-1)[0];

addEventListener("DOMContentLoaded", () => {
  if(!window.isBanter){
    const meta = document.getElementsByTagName('meta'), my_spaces = currentScript.getAttribute("my-spaces"), parent = document.getElementById('banter-info') ? document.getElementById('banter-info') : document.querySelector('body');
    let title = null, description = null, image = null;
    for (let i = 0; i < meta.length; i++) {
      let this_property = null, this_content = null;
      try{this_property = meta[i].attributes.property.value; this_content = meta[i].attributes.content.value;}catch{}
      finally{switch(this_property){
        case 'og:title': title = this_content; break;
        case 'og:description': description = this_content; break;
        case 'og:image': image = this_content; break;
      }}
    }
    if(title){makeElement('h1', title, parent);}
    if(image){makeElement('img', image, parent);}
    if(description){makeElement('h3', description, parent);}
    makeElement('a', 'open in Banter', parent, 'banter://'+window.location.hostname+window.location.pathname);
    if(my_spaces){makeElement('a', 'my Banter spaces', parent, my_spaces);}
  }
});

function makeElement(type, html, parent, link) {
  if(type && html && parent){
    let el = document.createElement(type);
    switch(type){
      case 'img': el.src = html; el.setAttribute('width', 'auto'); el.setAttribute('height', 'auto'); el.setAttribute('style', 'max-width:100%;max-height:420px;'); break;
      case 'a': if(link){el.href = link; el.innerHTML = html;} break;
      default: el.innerHTML = html;
    }
    if(type == 'a'){let p = document.createElement('p'); p.appendChild(el); parent.appendChild(p);}
    else{parent.appendChild(el);}
  }
}