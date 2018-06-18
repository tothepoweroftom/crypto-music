import p5 from 'p5'
export default function Particle(x, y, level, sketch) {
    this.level = level;
    this.life = 0;

    
    this.pos = new p5.Vector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(sketch.map(this.level, 0, 5, 5, 2));
    
    this.move = function(allParticles) {
        console.log(allParticles)
      this.life++;
      
      // Add friction.
      this.vel.mult(0.9);
      
      this.pos.add(this.vel);
      
      // Spawn a new particle if conditions are met.
      if (this.life % 10 == 0) {
        if (this.level > 0) {
          this.level -= 1;
          var newParticle = new Particle(this.pos.x, this.pos.y, this.level-1, sketch);
          allParticles.push(newParticle);
        }
      }
    }
  }