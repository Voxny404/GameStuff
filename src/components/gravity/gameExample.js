canvas = document.createElement('canvas');
canvas.setAttribute('id', 'clickArea');
canvas.setAttribute('style', `z-index:${5}`);
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'fixed';
canvas.style.top = '0px';
let ctx = canvas.getContext('2d');
ctx.font = '20px serif';
ctx.textAlign = 'center';
ctx.fillStyle = 'green';
ctx.fillText('Gravity Example', canvas.width / 2, canvas.height - 120);

//createObject
const createObject = (overlay, id, object) => {
  let canvas = document.createElement('canvas');
  let div = document.createElement('div');

  canvas.setAttribute('id', id);
  canvas.setAttribute('style', `z-index:${overlay}`);
  div.setAttribute('id', 'DivObject_' + id );
  div.appendChild(canvas);
  document.body.appendChild(div);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';
  canvas.style.top = '0px';
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = object.color;
  ctx.rect(object.x, object.y, object.width, object.height);
  ctx.fill();
}

// clear object
const clear = (id) => {
  let canvas = document.getElementById(id);
  if (!canvas) return
  let ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//update object
const updateObject = (object) => {
  clear(object.id);
  let canvas = document.getElementById(object.id);
  if (!canvas) return
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = object.color;
  ctx.rect(object.x, object.y, object.width, object.height);
  ctx.fill();
}

let objectArray = [];

const createSomeElements = (e) => {
  let randomColor = Math.floor(Math.random()*6);
  let color = null;
  if(randomColor == 0) color = 'green';
  if(randomColor == 1) color = 'blue';
  if(randomColor == 2) color = 'purpel';
  if(randomColor == 3) color = 'yellow';
  if(randomColor == 4) color = 'orang';
  if(randomColor == 5) color = 'red';

  let object = {
    x: e.clientX, y: e.clientY,
    width: Math.floor(Math.random()*100), height: Math.floor(Math.random()*100),
    id: 'rec', color: color,
    gravitySpeed: Math.floor(Math.random()*6)+1, drag: Math.floor(Math.random()*20)+1, jumbHeight:Math.floor(Math.random()*200),
    randomfall: Math.floor(Math.random()*2)
  };

  objectArray.push(object);
  createObject(1, objectArray.length - 1, object);
}

//addEventListener
canvas.onclick = (e) => createSomeElements(e);
canvas.addEventListener('touchstart', e => createSomeElements(e));

let gravity = new Gravity
let randomfall = Math.floor(Math.random()*2)

//simple animation loop
const animation = () => {
  requestAnimationFrame(animation);

  objectArray.forEach((object, i) => {
    object.id = i;
    updateObject(object);

    gravity.bouncy(object, 5);

    if(object.y + 15 <= window.innerHeight - 15) {
      if(object.randomfall == 1) object.x = object.x + 5;
      if(object.randomfall == 0 ) object.x = object.x - 5;
      if(object.x < 0) object.randomfall = 1;
      if(object.x >= window.innerWidth - 50) object.randomfall = 0;
    }
  });

}
animation();
