class SpriteAnimator {
  constructor() {
    this.imageMap = null;
  }

  createSpriteAnimation(id) {
    if(!id) console.log('SpriteAnimator: create must have an id object');

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let div = document.createElement('div');
    canvas.setAttribute('id', id);
    div.setAttribute('id', 'div_' + id);
    div.appendChild(canvas);
    document.body.appendChild(div);
  }

  loadImage(imagePath) {
    let image = new Image();

    image.src = imagePath;
    image.onload = () => {
      this.imageMap = image;
    }
  }

  updateSpriteAnimation(object) {

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
}
