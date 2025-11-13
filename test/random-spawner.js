addEventListener("DOMContentLoaded", () => {
  if(window.isBanter){
    window.loadDoneCallback = () => {
      const y = 0.1;
      const max_size = 6.5;
      let x = Math.random()*max_size;
      let z = Math.random()*max_size;
      if(Math.round(Math.random())){x = -x;}
      if(Math.round(Math.random())){z = -z;}
      movePlayer({x: x, y: y, z: z});
    }
  }
});