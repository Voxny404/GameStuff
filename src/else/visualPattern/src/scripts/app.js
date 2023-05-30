let displayColor = '#150050'
const backgroundColor = '#000000'

let app = document.createElement('div');
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');

canvas.style.position = 'absolute';
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
canvas.style.top = '0px'; canvas.style.left = '0px';

window.onresize = () => {
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

app.appendChild(canvas); document.body.appendChild(app);

let pointerObjectGlobal = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  w: 50, h: 50,
};

ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

const draw = () => {
  requestAnimationFrame(draw);

  let randomizer = Math.floor(Math.random() * 4);
  let randomizerShape = Math.floor(Math.random() * 5);

  ctx.strokeStyle = displayColor;
  ctx.fillStyle = backgroundColor;

  pointerObjectGlobal.w = Math.floor(Math.random() * 20);
  pointerObjectGlobal.h = Math.floor(Math.random() * 20);

  if (randomizer === 0) {
    pointerObjectGlobal.x = pointerObjectGlobal.x + Math.floor(Math.random() * 20);
  } else if (randomizer === 1) {
    pointerObjectGlobal.x = pointerObjectGlobal.x - Math.floor(Math.random() * 20);
  } else if (randomizer === 2) {
    pointerObjectGlobal.y = pointerObjectGlobal.y + Math.floor(Math.random() * 20);
  } else if (randomizer === 3) {
    pointerObjectGlobal.y = pointerObjectGlobal.y - Math.floor(Math.random() * 20);
  }

  if (pointerObjectGlobal.x < 0)
    pointerObjectGlobal.x = pointerObjectGlobal.x + 30;
  if (pointerObjectGlobal.x >= window.innerWidth)
    pointerObjectGlobal.x = pointerObjectGlobal.x - 30;
  if (pointerObjectGlobal.y < 0)
    pointerObjectGlobal.y = pointerObjectGlobal.y + 30;
  if (pointerObjectGlobal.y >= window.innerHeight)
    pointerObjectGlobal.y = pointerObjectGlobal.y - 30;

  if (randomizerShape === 0) {
    ctx.strokeRect(
      pointerObjectGlobal.x, pointerObjectGlobal.y, pointerObjectGlobal.w, pointerObjectGlobal.h);
  } else if (randomizerShape === 1) {
    ctx.moveTo(pointerObjectGlobal.x, pointerObjectGlobal.y);
  } else if (randomizerShape === 2) {
    ctx.clearRect(
      pointerObjectGlobal.x, pointerObjectGlobal.y, pointerObjectGlobal.w, pointerObjectGlobal.h);
      ctx.rect(pointerObjectGlobal.x, pointerObjectGlobal.y, pointerObjectGlobal.w, pointerObjectGlobal.h);
      ctx.fillStyle = backgroundColor;
      ctx.fill();
  } else if (randomizerShape === 3) {
    ctx.fillRect(
      pointerObjectGlobal.x, pointerObjectGlobal.y, pointerObjectGlobal.w, pointerObjectGlobal.h);
  }  else if (randomizerShape === 4) {
    ctx.fillStyle = displayColor;
    ctx.fillRect(
      pointerObjectGlobal.x, pointerObjectGlobal.y, pointerObjectGlobal.w, pointerObjectGlobal.h);
  }

};

draw();
