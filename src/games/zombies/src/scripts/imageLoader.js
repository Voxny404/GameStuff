class ImageLoader {

  // © 2021 by Voxny404
  //  _   __                    ____ ___  ____
  // | | / /__ __ __ ___  __ __/ / // _ \/ / /
  // | |/ / _ \\ \ // _ \/ // /_  _/ // /_  _/
  // |___/\___/_\_\/_//_/\_, / /_/ \___/ /_/
  //                    /___/
  // https://voxny404.github.io/portfolio

  constructor() {
    this.imageMap = null;
  }

  loadImage(imagePath) {
    let image = new Image();

    image.src = imagePath;
    image.onload = () => {
      this.imageMap = image;
    };
  }

  createImageObject() {

    let div = document.createElement('div');
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.setAttribute('id', 'npcAndPlayer');
    div.setAttribute('id', 'div_npcAndPlayer');
    div.appendChild(canvas);
    document.body.appendChild(div);
  }

  createImageObject2() {

    let div = document.createElement('div');
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.setAttribute('id', 'Player');
    div.setAttribute('id', 'div_Player');
    div.appendChild(canvas);
    document.body.appendChild(div);
  }
  createShoot() {
    let div = document.createElement('div');
    let canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'shoot');
    canvas.setAttribute('style', `z-index:4`);
    div.setAttribute('id', 'div_shoot');
    div.appendChild(canvas);
    document.body.appendChild(div);
  }

  drawShootingLine({id, mouseX, mouseY}) {
    let canvas = document.getElementById('shoot');
    let ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    ctx.beginPath();
    ctx.moveTo(mouseX + 30, mouseY);
    ctx.lineTo(mouseX + 30, 0);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }

  clearShoot() {
    let canvas = document.getElementById('shoot');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  }
  createScoreBoard() {
    let div = document.createElement('div');
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.setAttribute('id', 'scoreCanvas');
    div.setAttribute('id', 'score');
    canvas.setAttribute('style', `z-index:5`);
    div.appendChild(canvas);
    document.body.appendChild(div);
  }

  updateScoreBoard(remaining) {
    let canvas = document.getElementById('scoreCanvas');
    let ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';

    ctx.fillStyle = 'gray';
    ctx.font = 'bold 30px Arial';
    ctx.fillText('Zombies : ' + remaining, 20, 30);

  }

  updateImageObject(object, objectArray) {

    let canvas = document.getElementById('npcAndPlayer');
    if (!canvas) return;
    let ctx = canvas.getContext('2d');
    canvas.setAttribute('style', `z-index:${object.overlay}`);

    let tileMap = { width: 0, height: 0 };

    for (var i = 0; i < object.x; i++)
    tileMap.width = tileMap.width + object.tileWidth;

    for (var i = 0; i < object.y; i++)
    tileMap.height = tileMap.height + object.tileHeight;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';

    if (this.imageMap && objectArray) {
      for (var i = 0; i < objectArray.length; i++) {
        if (objectArray[i]) {
          ctx.setTransform(1, 0, 0, 1, objectArray[i].mouseX + objectArray[i].x, objectArray[i].mouseY +objectArray[i].y);
          ctx.drawImage(
            this.imageMap,
            tileMap.width,
            tileMap.height,
            objectArray[i].tileZoom,
            objectArray[i].tileZoom,
            objectArray[i].positionX,
            objectArray[i].positionY,
            objectArray[i].width,
            objectArray[i].height
          );
        }

      }

    }
  }

  updateImageObject2(object, objectArray) {

    let canvas = document.getElementById('Player');
    if (!canvas) return;
    let ctx = canvas.getContext('2d');
    canvas.setAttribute('style', `z-index:${object.overlay}`);

    let tileMap = { width: 0, height: 0 };

    for (var i = 0; i < object.x; i++)
    tileMap.width = tileMap.width + object.tileWidth;

    for (var i = 0; i < object.y; i++)
    tileMap.height = tileMap.height + object.tileHeight;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';

    if (this.imageMap && objectArray) {
      for (var i = 0; i < objectArray.length; i++) {
        if (objectArray[i]) {
          ctx.setTransform(1, 0, 0, 1, objectArray[i].mouseX, objectArray[i].mouseY);
          ctx.drawImage(
            this.imageMap,
            tileMap.width,
            tileMap.height,
            objectArray[i].tileZoom,
            objectArray[i].tileZoom,
            objectArray[i].positionX,
            objectArray[i].positionY,
            objectArray[i].width,
            objectArray[i].height
          );
        }

      }

    }
  }

  destroy(id) {
    let div = document.getElementById('div_' + id);
    if (!div) {
      console.log(`ImageLoader: ${div} is not existing!`);
    } else { div.remove(); }
  }
}
