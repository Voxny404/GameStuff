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

  createImageObject(id) {
    if(!id) console.log('ImageLoader: create must have an id object');

    let div = document.createElement('div');
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.setAttribute('id', id);
    div.setAttribute('id', 'div_'+id);
    div.appendChild(canvas);
    document.body.appendChild(div);
  }

  drawShootingLine({id, mouseX, mouseY}) {
    let div = document.createElement('div');
    let canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'shoot');
    div.setAttribute('id', 'div_shoot');
    div.appendChild(canvas);
    document.body.appendChild(div);
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
  updateImageObject(object) {

    if (!object.id) console.log('ImageLoader: NO OBJCET ID SET');
    if (!object.x && object.x !== 0) console.log('ImageLoader: NO OBJECT X SET');
    if (!object.y && object.y !== 0) console.log('ImageLoader: NO OBJECT Y SET');
    if (!object.width) console.log('ImageLoader: NO OBJECT WIDTH SET');
    if (!object.height) console.log('ImageLoader: NO OBJECT HEIGHT SET');

    let canvas = document.getElementById(object.id);
    if(!canvas) return
    let ctx = canvas.getContext('2d');
    canvas.setAttribute('style', `z-index:${object.overlay}`);

    let tileMap = { width: 0, height: 0 }

    for (var i = 0; i < object.x; i++) {
      tileMap.width = tileMap.width + object.tileWidth;
    }

    for (var i = 0; i < object.y; i++) {
      tileMap.height = tileMap.height + object.tileHeight;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';

    if (this.imageMap) {
      ctx.setTransform(1, 0, 0, 1, object.mouseX + object.x, object.mouseY +object.y);
      //ctx.rotate(object.angle * Math.PI / 180)
      ctx.drawImage(
        this.imageMap,
        tileMap.width,
        tileMap.height,
        object.tileZoom,
        object.tileZoom,
        object.positionX,
        object.positionY,
        object.width,
        object.height
      );
    }
  }

  destroy(id) {
    let div = document.getElementById('div_' + id);
    if (!div) {
      console.log(`ImageLoader: ${div} is not existing!`);
    } else { div.remove(); }
  }
}
