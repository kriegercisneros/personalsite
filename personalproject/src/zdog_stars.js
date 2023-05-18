import { Calc, rand, map } from 'zdog'

export function stars(id){
    let canvas = document.querySelector('canvas');
    let starGroup;
    let stars = [];
    let starCount = 500;
    let starRange = 200;

    let Calc = {
        rand: function(min, max) {
          return Math.random() * (max - min) + min;
        },
        map: function(value, start1, stop1, start2, stop2) {
          return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
        }
      };

    const il = new Zdog.Illustration({
    element: canvas,
    dragRotate: true
    });

    starGroup = new Zdog.Group({ addTo: il });
    
    for(let i = 1; i < starCount; i++) {
    stars.push({
        shape: new Zdog.Ellipse({
        addTo: starGroup,
        diameter: 1,
        translate: {
            x: Calc.rand(-starRange, starRange),
            y: Calc.rand(-starRange, starRange),
            z: Calc.rand(-starRange, starRange),
        },
        stroke: Calc.rand(0.5, 20),
        color: `hsla(0, 0%, 100%, ${Calc.rand(0.1, 10)})`,
        })
    });
    }

    function animate() {
    starGroup.rotate.y += 0.01;
    starGroup.rotate.x -= 0.00007;
    starGroup.rotate.z -= 0.00008;
    
    for(let i = 10, len = stars.length; i < len; i++) {
        let star = stars[i].shape;
        star.stroke = Calc.map(Math.sin(Date.now() * 0.7 + i * 0.002), -100, 15, 0.0005, 1);
    }

    il.updateRenderGraph();
    window.requestAnimationFrame(animate);
    }

    animate();
}