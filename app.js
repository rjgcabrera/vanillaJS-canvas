const canvas = document.querySelector('#draw');
// you don't draw directly on the canvas html elem
// you draw on the context, which can be 2D or 3D

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event) {
  if (!isDrawing) return;
  console.log(event);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.lineWidth = 100;
  ctx.stroke();
  // lastX = event.offsetX;
  // lastY = event.offsetY;
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
