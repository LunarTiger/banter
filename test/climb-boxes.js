var win = undefined;

async function checkWin() {
  if(win){makeGravButtons();}
}

AFRAME.registerComponent('win-button', {
  init: function () {
    this.el.addEventListener('click', () => {
      winnerWinnerChickenDinner();
    })
  }
});

function winnerWinnerChickenDinner() {
  lockPlayer();
  if(!win) {
    win = true;
    localStorage.setItem('winner', 'you sure are :)');
    gravity({x: 0, y: -0.0420, z: 0});
  }
  movePlayer({x: 0, y: 5, z: 0});
  unlockPlayer();
  makeGravButtons();
}

function makeGravButtons() {
  let num_grav_buttons = [
    {position:'-1 0 0', button_name:'g-9.81', text_val:'default\ngravity\n(0 -9.81 0)'},
    {position:'0 0 0', button_name:'g-0', text_val:'0g'},
    {position:'1 0 0', button_name:'g-0.7', text_val:'gravity\n0 -0.7 0'},
    {position:'2 0 0', button_name:'g-2', text_val:'gravity\n0 -2 0'},
    {position:'3 0 0', button_name:'g-42', text_val:'gravity\n0 -42 0'}
  ];
  let planet_grav_buttons = [
    {position:'-9 0 0', button_name:'g-charon', text_val:'Charon\ngravity\n-0.288'},
    {position:'-8 0 0', button_name:'g-pluto', text_val:'Pluto\ngravity\n-0.62'},
    {position:'-7 0 0', button_name:'g-uranus', text_val:'Uranus\ngravity\n-9.01'},
    {position:'-6 0 0', button_name:'g-saturn', text_val:'Saturn\ngravity\n-11.19'},
    {position:'-5 0 0', button_name:'g-jupiter', text_val:'Jupiter\ngravity\n-24.79'},
    {position:'-4 0 0', button_name:'g-mars', text_val:'Mars\ngravity\n-3.73'},
    {position:'-3 0 0', button_name:'g-moon', text_val:'Moon\ngravity\n-1.62'},
    {position:'-2 0 0', button_name:'g-venus', text_val:'Venus\ngravity\n-8.87'},
    {position:'-1 0 0', button_name:'g-mercury', text_val:'Mercury\ngravity\n-3.7'},
    {position:'0 0 0', button_name:'g-sun', text_val:'Sun\ngravity\n-274'},
  ];
  
  for (let i = 0; i < num_grav_buttons.length; i++) {
    makeGravButton(num_grav_buttons[i].position, num_grav_buttons[i].button_name, num_grav_buttons[i].text_val, 'gravity-buttons');
  }
  for (let i = 0; i < planet_grav_buttons.length; i++) {
    makeGravButton(planet_grav_buttons[i].position, planet_grav_buttons[i].button_name, planet_grav_buttons[i].text_val, 'planet-buttons');
  }
}

function makeGravButton(position, button_name, text_val, parent) {
  //create box
  let box = document.createElement('a-box');
  box.setAttribute('color', '#000');
  box.setAttribute('position', position);
  box.setAttribute('rotation', '0 0 0');
  box.setAttribute('depth', '0.05');
  box.setAttribute('width', '0.69');
  box.setAttribute('height', '0.6');
  box.setAttribute('sq-collider', true);
  box.setAttribute('sq-interactable', true);
  box.setAttribute(button_name, true);
  // create text
  let text = document.createElement('a-text');
  text.setAttribute('color', '#0ff');
  text.setAttribute('position', '0 0 0.03');
  text.setAttribute('scale', '0.69 0.69 0.69');
  text.setAttribute('value', text_val);
  text.setAttribute('align', 'center');
  // parent the text to the box and return the box
  box.appendChild(text);
  document.getElementById(parent).appendChild(box);
}

async function createClimbBox(ypos) {
  let climb = false;
  if (Math.round(Math.random())) {climb = true;}
  let box = document.createElement('a-box');
  box.setAttribute('color', 'rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')');
  box.setAttribute('position', '0 '+ypos+' 0');
  box.setAttribute('rotation', '0 0 0');
  box.setAttribute('depth', '1');
  box.setAttribute('width', '0.420');
  box.setAttribute('height', '10');
  if (climb) {box.setAttribute('sq-climbable', true);}
  box.setAttribute('sq-collider', true);
  return box;
}

async function createWinButton(ypos) {
  //create box
  let box = document.createElement('a-box');
  let red = Math.round(Math.random()*255).toString(16).padStart(2, '0');
  let green = Math.round(Math.random()*255).toString(16).padStart(2, '0');
  let blue = Math.round(Math.random()*255).toString(16).padStart(2, '0');
  box.setAttribute('color', 'rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')');
  box.setAttribute('id', 'win-button');
  box.setAttribute('position', '0 '+ypos+' 0');
  box.setAttribute('rotation', '90 0 0');
  box.setAttribute('depth', '0.05');
  box.setAttribute('width', '0.3');
  box.setAttribute('height', '0.3');
  box.setAttribute('sq-collider', true);
  box.setAttribute('sq-interactable', true);
  box.setAttribute('win-button', true);
  // create text
  let text = document.createElement('a-text');
  text.setAttribute('color', '#'+red+green+blue);
  text.setAttribute('id', 'win-button-text');
  text.setAttribute('position', '0 0 0.03');
  text.setAttribute('scale', '0.5 0.5');
  text.setAttribute('value', 'click\nme');
  text.setAttribute('align', 'center');
  // parent the text to the box and return the box
  box.appendChild(text);
  return box;
}

addEventListener("DOMContentLoaded", async() => {if(window.isBanter){
  let holder = document.createElement('a-entity'); holder.id = "climb-boxes"; holder.setAttribute('position', '0 5.69 -37'); holder.setAttribute('rotation', '0 90 0');
  let count = 0;
  while (count < 1000) {
    let box = await createClimbBox(count);
    holder.appendChild(box);
    count = count + 10;
  }
  count = count-3;
  //create condom and parent to holder
  const condom = document.createElement('a-box');
  condom.setAttribute('material', 'transparent: true; opacity: 0');
  condom.setAttribute('id', 'win-button-condom');
  condom.setAttribute('position', '0 '+count+' 0');
  condom.setAttribute('rotation', '90 0 0');
  condom.setAttribute('depth', '0.055');
  condom.setAttribute('width', '0.35');
  condom.setAttribute('height', '0.35');
  condom.setAttribute('sq-collider', true);
  condom.setAttribute('sq-interactable', true);
  condom.setAttribute('win-condom', true);
  holder.appendChild(condom);
  //create the win button and add everything
  const box = await createWinButton(count);
  count = count+3;
  holder.appendChild(box);
  document.querySelector('a-scene').appendChild(holder);
  win = await localStorage.getItem('winner');
  checkWin();
}});