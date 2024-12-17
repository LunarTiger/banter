if(window.isBanter){
  [
    {name: 'portal-toggle', url: 'https://rev.lunar.gay/banter/my_spaces.json'}
  ].forEach(d => {
    AFRAME.registerComponent(d.name, {
      init: async function () {
        const portals = await fetch(d.url);
        const portalJson = await portals.json();
        const portalParent = doPortals(this.el, portalJson);
        let visible = false;
        this.el.addEventListener('click', () => {
          visible = !visible;
          portalParent.setAttribute('visible', visible);
        });
      }
    });
  });
}

function doPortals(button, portal_array) {  
  
  let existing = document.createElement('a-entity');
  existing.id = button.id+'-holder';
  existing.setAttribute('position', '1.5 -1.12 0.83');
  existing.setAttribute('visible', false);
  button.appendChild(existing);
  console.log(existing.id);
  
  // Add the new portals based on the array
  for (let i = 0; i < portal_array.length; i++) {
    let this_portal =  document.createElement('a-link'); 
    this_portal.setAttribute('position', (i*2)+' 0 0'); 
    this_portal.setAttribute('href', portal_array[i]);
    existing.appendChild(this_portal);
    console.log('portal made: '+portal_array[i]);
  }
  
  // return the portal parent
  return existing;
}