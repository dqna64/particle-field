
class Particle {
  constructor(numPoints, multiplier, scalee) {
    this.pos = createVector(random(10, width-10), random(10, height-10))
    this.vel = createVector(random(-2, 2), random(-2, 2))
    this.acc = createVector(random(-1, 1), random(-1, 1))
    this.r = random(1, 4)
    this.count = 0
    this.trail = []
  }

  update() {
    this.count += 1

    this.trail.push(this.pos.copy())
    if (this.trail.length > trailLen) {
      this.trail.shift()
    }
    //this.vel.add(this.acc)
    this.pos.add(this.vel);

  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x *= -1;
    } else if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.x *= -1;
    }
    if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y *= -1;
    } else if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.y *= -1;
    }
  }

  show() {
    noStroke();
    for (let i=0; i<this.trail.length; i++) {
      let col = map(i, 0, this.trail.length, 0, 220)
      let r = map(i ,0, this.trail.length, 0, this.r/2)
      fill(col);
      //ellipse(this.trail[i].x, this.trail[i].y, r*2)
    }
    noStroke()
    fill(255, 190)
    ellipse(this.pos.x, this.pos.y, this.r * 2)
  }
}
