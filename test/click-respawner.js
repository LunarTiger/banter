AFRAME.registerComponent('button-that-is-clicked', {
  init: function () {
    this.el.addEventListener('click', () => {
      const ball = document.getElementById('Ball1');
      if(ball.object3D.id && window.isBanter){
        addForce({x: 0, y: 0, z: 0}, 'force', ball.object3D.id);
        moveRotation({x: 0, y: 0, z: 0}, ball.object3D.id);
        movePosition({x: -8.3, y: 0.1, z: -3}, ball.object3D.id);
      }
    })
  }
});