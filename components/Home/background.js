const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'];
//const colors = ['000000']
class Particle {
  constructor() {
    this.radius = Math.random() * 50 + 50;
    this.x = Math.random() * (w - this.radius * 2) + this.radius;
    this.y = Math.random() * (h - this.radius * 2) + this.radius;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.dx = Math.random() * 4 - 2;
    this.dy = Math.random() * 4 - 2;
  }

  draw() {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
    gradient.addColorStop(1, this.color);

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  }
//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fillStyle = this.color;
//     ctx.fill();
//     canvas.classList.add('Particle')
//   }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > w || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > h || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  }
}

let particles = [];
for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

function loop() {
  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
  }

  requestAnimationFrame(loop);
}

document.body.appendChild(canvas);
loop();
