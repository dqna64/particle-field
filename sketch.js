let particles = [];
let trailLen = 13;


function setup() {
  width = 1280;
  height = 720;
  createCanvas(width, height);

  for (let i = 0; i <= 60; i++) {
    particles.push(new Particle())
  }

}

function draw() {
  background(10);

  for (let i=0; i<particles.length; i++) {
    particles[i].update()
    particles[i].edges()
    for (let j=0; j < particles.length; j++) {
      if (i != j) {
        d = dist(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y)
        if (d <= 180) {
          let alpha = map(d, 0, 180, 230, 0)
          strokeWeight(0.5);
          stroke(170, alpha);
          line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y)
        }
      }
    }
    particles[i].show()
  }
}

let keyCount = 0;
function keyPressed() {
  if (key == " ") {
    keyCount += 1;
    if (keyCount % 2) {
      noLoop()
    } else {
      loop()
    }
  }
}
