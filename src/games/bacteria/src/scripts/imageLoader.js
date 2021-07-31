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
    if (!id) console.log('ImageLoader: create must have an id object');

    let div = document.createElement('div');
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.setAttribute('id', id);
    div.setAttribute('id', 'div_' + id);
    div.appendChild(canvas);
    document.body.appendChild(div);
  }

  createScoreBoard() {
    let div = document.createElement('div');
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.setAttribute('id', 'scoreCanvas');
    div.setAttribute('id', 'score');
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
    ctx.fillText('AMOUNT: ' + remaining, 20, 30);

  }

  updateImageObject(object, objectArray) {

    let canvas = document.getElementById('npcPlayer');
    if (!canvas) return;
    let ctx = canvas.getContext('2d');
    //canvas.setAttribute('style', `z-index:${object.overlay}`);

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
          ctx.fillStyle = objectArray[i].color;
          ctx.font = 'bold 15px Arial';
          ctx.fillText(
            objectArray[i].id.replace('npcPlayer', '') + '   LVL: ' + objectArray[i].lvl,
            objectArray[i].positionX, objectArray[i].positionY
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
