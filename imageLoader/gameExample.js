
let imageLoader = new ImageLoader();

let cloud = {
  tileWidth: 17, tileHeight: 17, tileZoom: 16,
  x: 12, y: 3, positionX: 0, positionY: 0,
  width: 60, height: 60, id: 'cloud', overlay: 1
}

let objectSky = {
  tileWidth: 17, tileHeight: 17, tileZoom: 16,
  x: 12, y: 6, positionX: 0, positionY: 0,
  width: window.innerWidth, height: window.innerHeight,
  id: 'sky', overlay: 0
}

let tree = {
  treeTopM: {
    tileWidth: 17,
    tileHeight: 17,
    tileZoom: 16,
    x: 7,
    y: 6,
    positionX: window.innerWidth / 2,
    positionY: window.innerHeight- 50,
    width: 60,
    height: 60,
    id: 'treeM',
    overlay: 0
  },
  treeTopL: {
    tileWidth: 17,
    tileHeight: 17,
    tileZoom: 16,
    x: 8,
    y: 6,
    positionX: window.innerWidth / 2 + 60,
    positionY: window.innerHeight - 50,
    width: 60,
    height: 60,
    id: 'treeL',
    overlay: 0
  },
  treeTopR: {
    tileWidth: 17,
    tileHeight: 17,
    tileZoom: 16,
    x: 6,
    y: 6,
    positionX: window.innerWidth / 2 -60,
    positionY: window.innerHeight - 50,
    width: 60,
    height: 60,
    id: 'treeR',
    overlay: 0
  },
}

imageLoader.loadImage('map.png');

imageLoader.createImageObject('cloud');
imageLoader.createImageObject('sky');

imageLoader.createImageObject('treeM');
imageLoader.createImageObject('treeR');
imageLoader.createImageObject('treeL');

const animation = () => {
  requestAnimationFrame(animation)

  imageLoader.updateImageObject(tree.treeTopM)
  imageLoader.updateImageObject(tree.treeTopL)
  imageLoader.updateImageObject(tree.treeTopR)

  imageLoader.updateImageObject(cloud)
  imageLoader.updateImageObject(objectSky)

  //simple animation
  if (cloud.positionX < window.innerWidth) {
    cloud.positionX = cloud.positionX + 8
  } else { cloud.positionX = Math.random() }

}

setTimeout(() => imageLoader.destroy('treeM'), 8000)
animation()
