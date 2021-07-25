class GameObject {

// © 2021 by Voxny404
//  _   __                    ____ ___  ____
// | | / /__ __ __ ___  __ __/ / // _ \/ / /
// | |/ / _ \\ \ // _ \/ // /_  _/ // /_  _/
// |___/\___/_\_\/_//_/\_, / /_/ \___/ /_/
//                    /___/
// https://voxny404.github.io/portfolio

  constructor() {

  }

  createGameObjectRect(object) {

    document.body.style.overflow = 'hidden';
    let gameObjects = document.createElement('div');
    gameObjects.setAttribute('id', 'gameObject');
    document.body.appendChild(gameObjects);

    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.setAttribute('id', object.id);
    canvas.setAttribute('style', `z-index:${object.overlay}`);

    let ctx = canvas.getContext('2d');

    if (typeof object.x !== 'number') console.log('X: is not a number!');
    if (typeof object.y !== 'number') console.log('Y: is not a number!');
    if (typeof object.width !== 'number') console.log('WIDHT: is not a number!');
    if (typeof object.height !== 'number') console.log('HEIGHT: is not a number!');
    if (typeof object.id !== 'string') console.log('ID: is not a string!');
    if (typeof object.color !== 'string') console.log('COLOR: is not a string!');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';

    ctx.fillStyle = object.color;
    ctx.rect(object.x, object.y, object.width, object.height);
    ctx.fill();

    gameObjects.appendChild(canvas);
  }

  updateGameObjectRect(object) {

    let canvas = document.getElementById(object.id);

    if (typeof object.x !== 'number') console.log('X: is not a number!');
    if (typeof object.y !== 'number') console.log('Y: is not a number!');
    if (typeof object.width !== 'number') console.log('WIDHT: is not a number!');
    if (typeof object.height !== 'number') console.log('HEIGHT: is not a number!');
    if (typeof object.id !== 'string') console.log('ID: is not a string!');
    if (typeof object.color !== 'string') console.log('COLOR: is not a string!');

    if (!canvas) {
      console.log(`GameObject: ${object.id} is not existing!`);
    } else {
      let ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = object.color;
      ctx.rect(object.x, object.y, object.width, object.height);
      ctx.fill();
    }
  }

  destroyGameObject(canvasId) {
    let canvas = document.getElementById(canvasId);
    if (!canvas) {
      console.log(`GameObject: ${canvasId} is not existing!`);
    } else { canvas.remove(); }
  }

  collision(object) {
    let distanceWidth = Math.floor(object.firstX - object.secondX);
    let distanceHeight = Math.floor(object.firstY - object.secondY);

    if (distanceWidth <= object.radius &&
       distanceHeight <= object.radius &&
       distanceWidth >= -object.radius &&
       distanceHeight >= -object.radius
     ) {
      return true;
    }
  }

  worldCollision(object, offset) {
    if (!offset) offset = 0;
    if (object.x + offset > window.innerWidth) return 'X';
    if (((object.x + offset) - window.innerWidth) < -window.innerWidth) return '-X';
    if (object.y + offset > window.innerHeight) return 'Y';
    if (((object.y + offset) - window.innerHeight) < -window.innerHeight) return '-Y';
  }

}
