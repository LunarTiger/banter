let level = 0;
let clicked = false;

AFRAME.registerComponent('respawner', {
  init: function() {
    this.el.addEventListener('trigger-enter', ()=>{
      if(this.el.object3D.userData.isLocalPlayer){
        level = 0;
        lockPlayer();
        movePlayer({x: 0, y: 0.1, z: 2});
        create();
        console.log("you fell");
      }
    });
  }
});

AFRAME.registerComponent('next-button', {
  init: function () {
    this.el.addEventListener('click', async() => {
      if(clicked){return;}
      clicked = true;
      setTimeout(function () {
        clicked = false;
      }, 5000);
      lockPlayer();
      level = level + 1;
      create();
    })
  }
});

async function createClimbBox(ypos) {
  let box = document.createElement('a-box');
  box.setAttribute('color', 'rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')');
  box.setAttribute('position', '0 '+ypos+' 0');
  box.setAttribute('rotation', '0 0 0');
  box.setAttribute('depth', '1');
  box.setAttribute('width', '0.420');
  box.setAttribute('height', '1');
  if (Math.round(Math.random())) {box.setAttribute('sq-climbable', true);}
  box.setAttribute('sq-collider', true);
  return box;
}

async function createNextButton(ypos) {
  //create box
  let box = document.createElement('a-box');
  let red = Math.round(Math.random()*255).toString(16).padStart(2, '0');
  let green = Math.round(Math.random()*255).toString(16).padStart(2, '0');
  let blue = Math.round(Math.random()*255).toString(16).padStart(2, '0');
  box.setAttribute('color', 'rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')');
  box.setAttribute('id', 'next-button');
  box.setAttribute('position', '0 '+ypos+' 0');
  box.setAttribute('rotation', '0 0 0');
  box.setAttribute('depth', '0.05');
  box.setAttribute('width', '0.3');
  box.setAttribute('height', '0.3');
  box.setAttribute('scale', '0.5 0.5 0.5');
  box.setAttribute('sq-collider', true);
  box.setAttribute('sq-interactable', true);
  box.setAttribute('next-button', true);
  // create text
  let text0 = document.createElement('a-text');
  text0.setAttribute('color', '#'+red+green+blue);
  text0.setAttribute('id', 'win-button-text');
  text0.setAttribute('position', '0 0 0.03');
  text0.setAttribute('scale', '0.5 0.5');
  text0.setAttribute('value', 'click\nme');
  text0.setAttribute('align', 'center');
  let text1 = document.createElement('a-text');
  text1.setAttribute('color', '#'+red+green+blue);
  text1.setAttribute('id', 'win-button-text');
  text1.setAttribute('position', '0 0 -0.03');
  text1.setAttribute('rotation', '0 180 0');
  text1.setAttribute('scale', '0.5 0.5');
  text1.setAttribute('value', 'click\nme');
  text1.setAttribute('align', 'center');
  // parent the text to the box and return the box
  box.appendChild(text0);
  box.appendChild(text1);
  return box;
}

async function thisLevel() {
  //create box
  let box = document.createElement('a-box');
  let red = Math.round(Math.random()*255).toString(16).padStart(2, '0');
  let green = Math.round(Math.random()*255).toString(16).padStart(2, '0');
  let blue = Math.round(Math.random()*255).toString(16).padStart(2, '0');
  box.setAttribute('color', 'rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')');
  box.setAttribute('position', '-5 1.5 0');
  box.setAttribute('rotation', '0 90 0');
  box.setAttribute('depth', '0.05');
  box.setAttribute('width', '0.9');
  box.setAttribute('height', '0.3');
  // create text
  let txtval = 'You have climbed\n'+level+' level';
  if (level != 1){txtval = txtval + 's';}
  let text = document.createElement('a-text');
  text.setAttribute('color', '#'+red+green+blue);
  text.setAttribute('position', '0 0 0.03');
  text.setAttribute('scale', '0.5 0.5');
  text.setAttribute('value', txtval);
  text.setAttribute('align', 'center');
  // parent the text to the box and return the box
  box.appendChild(text);
  return box;
}

async function destroy() {
  const old_one = document.getElementById('climb-boxes');
  if(old_one) {
    const old_children = old_one.children;
    if(old_children) {
      for (let i = 0; i < old_children.length; i++){
        old_children[i].parentElement.removeChild(old_children[i]);
      }
      old_one.parentElement.removeChild(old_one);
    }
  }
}

async function create() {
  if(document.getElementById('climb-boxes')){
    await destroy();
    create();
    return;
  }
  let holder = document.createElement('a-entity');
  holder.id = "climb-boxes";
  holder.setAttribute('position', '0 '+(level*103)+' 0');
  holder.setAttribute('rotation', '0 0 0');
  let floor = document.createElement('a-box');
  floor.setAttribute('position', '0 -1.1 0');
  floor.setAttribute('depth', '10');
  floor.setAttribute('width', '10');
  floor.setAttribute('height', '2');
  floor.setAttribute('sq-collider', true);
  floor.setAttribute('color', 'rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')');
  holder.appendChild(floor)
  for (let i = 2; i < 103; i++) {
    let box = await createClimbBox(i);
    holder.appendChild(box);
  }
  //create the button and add everything
  let next = await createNextButton(103.666);
  let level_display = await thisLevel();
  holder.appendChild(next);
  holder.appendChild(level_display);
  document.querySelector('a-scene').appendChild(holder);
  unlockPlayer();
}

window.loadDoneCallback = () => {
  if(window.isBanter){movePlayer({x: 0, y: 0.1, z: 2});create();}
}