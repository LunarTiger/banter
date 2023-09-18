AFRAME.registerComponent('negy', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -9.81, z: 0})
    })
  }
});

AFRAME.registerComponent('posy', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: 9.81, z: 0})
    })
  }
});

AFRAME.registerComponent('posx', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 9.81, y: 0, z: 0})
    })
  }
});

AFRAME.registerComponent('negx', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: -9.81, y: 0, z: 0})
    })
  }
});

AFRAME.registerComponent('posz', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: 0, z: 9.81})
    })
  }
});

AFRAME.registerComponent('negz', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: 0, z: -9.81})
    })
  }
});