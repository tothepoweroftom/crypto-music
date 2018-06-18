import Particle from './Particle'
import Delaunay from './Delaunay'

export default function( sketch ) {

    var allParticles = [];
    var maxLevel = 5;
    var useFill = false;
    
    var data = [];
  
    sketch.setup = function() {
      sketch.createCanvas(200, 200);
  
      sketch.colorMode(sketch.HSB, 360);
      
      sketch.textAlign(sketch.CENTER);
      
      sketch.background(0);
    };
  
    sketch.draw = function() {
       // Create fade effect.
       sketch.noStroke();
       sketch.fill(0, 30);
       sketch.rect(0, 0, 200, 200);
      
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
            sketch.fill(165+p1.life*1.5, 360, 360);
          } else {
            sketch.noFill();
            sketch.stroke(165+p1.life*1.5, 360, 360);
          }
          
          sketch.triangle(p1.pos.x, p1.pos.y, 
                  p2.pos.x, p2.pos.y, 
                  p3.pos.x, p3.pos.y);
        }
      }
    };

    sketch.mousePressed = function() {
      allParticles.push(new Particle(sketch.mouseX, sketch.mouseY, maxLevel, sketch));

    };
  };
  
