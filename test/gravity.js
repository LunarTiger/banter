AFRAME.registerComponent('g-launch', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: 420, z: 0})
    })
  }
});

AFRAME.registerComponent('g-9.81', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -9.81, z: 0})
    })
  }
});

AFRAME.registerComponent('g-9.8', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -9.81, z: 0})
    })
  }
});

AFRAME.registerComponent('g9.8', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: 9.8, z: 0})
    })
  }
});

AFRAME.registerComponent('g-0.7', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -0.7, z: 0})
    })
  }
});

AFRAME.registerComponent('g-2', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -2, z: 0})
    })
  }
});

AFRAME.registerComponent('g-42', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -42, z: 0})
    })
  }
});

AFRAME.registerComponent('g-0', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: 0, z: 0})
    })
  }
});


/***************************
 *     planets gravity     *
 ***************************/
AFRAME.registerComponent('g-sun', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -274, z: 0})
    })
  }
});
AFRAME.registerComponent('g-mercury', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -3.7, z: 0})
    })
  }
});
AFRAME.registerComponent('g-venus', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -8.87, z: 0})
    })
  }
});
AFRAME.registerComponent('g-moon', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -1.62, z: 0})
    })
  }
});
AFRAME.registerComponent('g-mars', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -3.73, z: 0})
    })
  }
});
AFRAME.registerComponent('g-jupiter', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -24.79, z: 0})
    })
  }
});
AFRAME.registerComponent('g-saturn', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -11.19, z: 0})
    })
  }
});
AFRAME.registerComponent('g-uranus', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -9.01, z: 0})
    })
  }
});
AFRAME.registerComponent('g-pluto', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -0.62, z: 0})
    })
  }
});
AFRAME.registerComponent('g-charon', {
  init: function () {
    this.el.addEventListener('click', () => {
      gravity({x: 0, y: -0.288, z: 0})
    })
  }
});