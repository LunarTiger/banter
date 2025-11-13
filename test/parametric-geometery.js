AFRAME.registerComponent('parametric-spring', {
    update: function() {if(window.isBanter){  
        // decide how detailed you want the object, these could be exposed via the component schema. 
        let slices = 25;
        let stacks = 25;
        
        // This is the meat of the parametric function that takes in the UV value and returns a 3D vector.
        let points = window.generateParametric(slices, stacks, (u, v) => {
            let rotations = 3;
            u = u * (2 * rotations) * -Math.PI;
            v = (v * 2 * Math.PI) - Math.PI;

            let r1 = 0.2;
            let r2 = 0.2;

            let periodlength = 1.2;

            let x = (1 - r1 * Math.cos(v)) * Math.cos(u);
            let y = (1 - r1 * Math.cos(v)) * Math.sin(u);
            let z = r2 * (Math.sin(v) + periodlength * u / Math.PI);

            return new THREE.Vector3(x, y, z);
        });
        
        // The type is custom so you can pass in your own array of points. This can be a lot of data based on the stacks * slices.
        this.el.getObject3D('mesh').userData.parametric = {
            enabled: true,
            type: 'custom',
            stacks: stacks,
            slices: slices,
            points: points
        };
    }}
});
AFRAME.registerComponent('parametric-apple', {
    update: function() {if(window.isBanter){            
        let slices = 25;
        let stacks = 25;
      
      
        let points = window.generateParametric(slices, stacks, (u, v) => {
            u = u * 2 * Math.PI;
            v = (v * 2 * Math.PI) - Math.PI;
            let x = Math.cos(u) * (4 + 3.8 * Math.cos(v));
            let y = Math.sin(u) * (4 + 3.8 * Math.cos(v));
            let z = (Math.cos(v) + Math.sin(v) - 1) * (1 + Math.sin(v)) * Math.log(1 - Math.PI * v / 10) + 7.5 * Math.sin(v);
            return new THREE.Vector3(x, y, z);
        });
        this.el.getObject3D('mesh').userData.parametric = {
            enabled: true,
            type: 'custom',
            stacks: stacks,
            slices: slices,
            points: points
        };
    }}
});
AFRAME.registerComponent('parametric-pillow', {
    update: function() {if(window.isBanter){
        let slices = 25;
        let stacks = 25;
        let points = window.generateParametric(slices, stacks, (u, v) => {
            u = (u * Math.PI) - Math.PI;
            v = (v * 2 * Math.PI) - Math.PI;
            var x = Math.cos(u);
            var y = Math.cos(v);
            var z = Math.sin(u) * Math.sin(v);
            return new THREE.Vector3(x, y, z);
        });
        this.el.getObject3D('mesh').userData.parametric = {
            enabled: true,
            type: 'custom',
            stacks: stacks,
            slices: slices,
            points: points
        };
    }}
});
/*AFRAME.registerComponent('parametric-klein', {
    update: function() {if(window.isBanter){
        let slices = 25;
        let stacks = 25;
        let points = window.generateParametric(slices, stacks, (u, v) => {
            let aa = 3;
            u = (u * Math.PI) - Math.PI;
            v = (v * 2 * Math.PI) - Math.PI;
            var x = (aa + cos(v / 2) * sin(u) - sin(v / 2) * sin(2 * u)) * cos(v);
            var y = (aa + cos(v / 2) * sin(u) - sin(v / 2) * sin(2 * u)) * sin(v)
            var z = sin(v / 2) * sin(u) + cos(v / 2) * sin(2 * u);
            return new THREE.Vector3(x, y, z);
        });
        this.el.getObject3D('mesh').userData.parametric = {
            enabled: true,
            type: 'custom',
            stacks: stacks,
            slices: slices,
            points: points
        };
    }}
});*/