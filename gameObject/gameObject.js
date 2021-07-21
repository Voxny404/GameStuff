class GameObject {
  constructor() {

  }

  createGameObjectRect(x, y, width, height, id, color) {
    document.body.style.overflow = 'hidden';
    let gameObjects = document.createElement('div');
    gameObjects.setAttribute('id', 'gameObjects');
    document.body.appendChild(gameObjects);

    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.setAttribute('id', id);
    let ctx = canvas.getContext('2d');

    if (!typeof x === 'number') console.log('X: is not a number!');
    if (!typeof y === 'number') console.log('Y: is not a number!');
    if (!typeof width === 'number') console.log('WIDHT: is not a number!');
    if (!typeof height === 'number') console.log('HEIGHT: is not a number!');
    if (!typeof id === 'string') console.log('ID: is not a string!');
    if (!typeof color === 'string') console.log('COLOR: is not a string!');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    
    ctx.fillStyle = color;
    ctx.rect(x, y, width, height);
    ctx.fill();

    gameObjects.appendChild(canvas);
  }

  updateGameObjectRect(x, y, width, height, id, color) {
    let canvas = document.getElementById(id);

    if (!typeof x === 'number') console.log('X: is not a number!');
    if (!typeof y === 'number') console.log('Y: is not a number!');
    if (!typeof width === 'number') console.log('WIDHT: is not a number!');
    if (!typeof height === 'number') console.log('HEIGHT: is not a number!');
    if (!typeof id === 'string') console.log('ID: is not a string!');
    if (!typeof color === 'string') console.log('COLOR: is not a string!');

    if (!canvas) {
      console.log(`GameObject: ${canvasId} is not existing!`);
    } else {
      let ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;
      ctx.rect(x, y, width, height);
      ctx.fill();
    }
  }
  destroyGameObject(canvasId) {
    let canvas = document.getElementById(canvasId);
    if (!canvas) {
      console.log(`GameObject: ${canvasId} is not existing!`);
    } else {
      canvas.remove();
    }
  };

}
