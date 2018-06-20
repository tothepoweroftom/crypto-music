import Particle from './Particle'
import Delaunay from './Delaunay'

export default function( sketch ) {

    var allParticles = [];
    var maxLevel = 4;
    var useFill = false;
    
    var data = [];
    var width = 0;
    var height = 0;
    var counter = 0;

    sketch.setup = function() {
      width = document.getElementById('visualizer').clientWidth;
      height = document.getElementById('visualizer').clientHeight;

      sketch.createCanvas(width, height);
  
      
      sketch.textAlign(sketch.CENTER);
      sketch.textFont("Space Mono");
      sketch.textSize(8);

      // sketch.background(0);
    };
  
    sketch.draw = function() {

       // Create fade effect.
       sketch.noStroke();
      if(counter <= 500) {
        sketch.fill(44, 48, 46, 0.5);
        counter += 1;

      } else {
        sketch.fill(44, 48, 46, 255);
      counter = 0;
      }
       sketch.rect(0, 0, width, height);
      
      // Move and spawn particles.
      // Remove any that is below the velocity threshold.
      for (var i = allParticles.length-1; i > -1; i--) {
        allParticles[i].move(allParticles);
        
        if (allParticles[i].vel.mag() < 0.01) {
          allParticles.splice(i, 1);
        }
      }
      
      if (allParticles.length > 0) {
        // Run script to get points to create triangles with.
        data = Delaunay.triangulate(allParticles.map(function(pt) {
          return [pt.pos.x, pt.pos.y];
        }));
        
        sketch.strokeWeight(0.1);
        
        // Display triangles individually.
        for (var i = 0; i < data.length; i += 3) {
          // Collect particles that make this triangle.
          var p1 = allParticles[data[i]];
          var p2 = allParticles[data[i+1]];
          var p3 = allParticles[data[i+2]];
          
          // Don't draw triangle if its area is too big.
          var distThresh = 75;
          
          if (sketch.dist(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y) > distThresh) {
            continue;
          }
          
          if (sketch.dist(p2.pos.x, p2.pos.y, p3.pos.x, p3.pos.y) > distThresh) {
            continue;
          }
          
          if (sketch.dist(p1.pos.x, p1.pos.y, p3.pos.x, p3.pos.y) > distThresh) {
            continue;
          }
          
          // Base its hue by the particle's life.
          if (useFill) {
            sketch.noStroke();
            sketch.fill(155 + p1.life , 225 +p1.life, 157+p1.life);
          } else {
            let a = counter / 10;
            sketch.noFill();
            sketch.stroke(55 + p1.life*4 , 125 +p1.life*4, 57+p1.life*4);
          }
          
          sketch.triangle(p1.pos.x, p1.pos.y, 
                  p2.pos.x, p2.pos.y, 
                  p3.pos.x, p3.pos.y);
        }
      }

      if (allParticles.length > 500) {
        allParticles = [];
      }
    };

    sketch.mousePressed = function() {
      allParticles.push(new Particle(sketch.mouseX, sketch.mouseY, maxLevel, sketch));

    };

    sketch.addParticles = function(hash) {
      sketch.noStroke();
      sketch.fill(201, 253, 212);
      let x = sketch.random( 50, width-5);
      let y = sketch.random(50, height-50);
      let offset = sketch.random(-150,100) + 50;
      let offset2 = sketch.random(-150,100) + 50;

      let offx = x + offset;
      let offy = y + offset2;

      sketch.text(hash,offx,offy);

      sketch.noFill();
      sketch.stroke(201, 253, 212);
      sketch.line(x+30,y+30,offx,offy);
      allParticles.push(new Particle(x, y, maxLevel, sketch));

    }
  };
  
