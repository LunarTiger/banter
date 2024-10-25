var previousGrav = null;

AFRAME.registerComponent('negy', {
  init: function () {
    this.el.addEventListener('click', () => {
      if(previousGrav == "negy"){
        gravity({x: 0, y: 0, z: 0});
        previousGrav = null;
      }else{
        gravity({x: 0, y: -9.81, z: 0});
        previousGrav = "negy";
      }
    })
  }
});

AFRAME.registerComponent('posy', {
  init: function () {
    this.el.addEventListener('click', () => {
      if(previousGrav == "posy"){
        gravity({x: 0, y: 0, z: 0});
        previousGrav = null;
      }else{
        gravity({x: 0, y: 9.81, z: 0});
        previousGrav = "posy";
      }
    })
  }
});

AFRAME.registerComponent('posx', {
  init: function () {
    this.el.addEventListener('click', () => {
      if(previousGrav == "posx"){
        gravity({x: 0, y: 0, z: 0});
        previousGrav = null;
      }else{
        gravity({x: 9.81, y: 0, z: 0});
        previousGrav = "posx";
      }
    })
  }
});

AFRAME.registerComponent('negx', {
  init: function () {
    this.el.addEventListener('click', () => {
      if(previousGrav == "negx"){
        gravity({x: 0, y: 0, z: 0});
        previousGrav = null;
      }else{
        gravity({x: -9.81, y: 0, z: 0});
        previousGrav = "negx";
      }
    })
  }
});

AFRAME.registerComponent('posz', {
  init: function () {
    this.el.addEventListener('click', () => {
      if(previousGrav == "posz"){
        gravity({x: 0, y: 0, z: 0});
        previousGrav = null;
      }else{
        gravity({x: 0, y: 0, z: 9.81});
        previousGrav = "posz";
      }
    })
  }
});

AFRAME.registerComponent('negz', {
  init: function () {
    this.el.addEventListener('click', () => {
      if(previousGrav == "negz"){
        gravity({x: 0, y: 0, z: 0});
        previousGrav = null;
      }else{
        gravity({x: 0, y: 0, z: -9.81});
        previousGrav = "negz";
      }
    })
  }
});