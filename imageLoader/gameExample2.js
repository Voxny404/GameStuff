let spriteAnimator = new ImageLoader()

//sprite object
let player = {
  tileWidth: 22, tileHeight:23, tileZoom: 24,
  x: 0, y: 0, positionX: 0, positionY: 0,
  width: 60, height: 60, id: 'player', overlay: 1
}

let npc = {
  tileWidth: 22, tileHeight:22.7, tileZoom: 24,
  x: 0, y: 4, positionX: window.innerWidth/2, positionY: window.innerHeight /3,
  width: 60, height: 60, id: 'npc', overlay: 1
}

let npc2 = {
  tileWidth: 23, tileHeight:22.9, tileZoom: 24,
  x: 3, y: 4, positionX: window.innerWidth/2, positionY: window.innerHeight /3,
  width: 60, height: 60, id: 'npc2', overlay: 1
}

//load the image
spriteAnimator.loadImage('players.png');

//create the elements
spriteAnimator.createImageObject(player.id);
spriteAnimator.createImageObject(npc.id);
spriteAnimator.createImageObject(npc2.id);

//simple ai logic
let turnRandomly = Math.floor(Math.random() * 5);
setInterval(() => turnRandomly = Math.floor(Math.random() * 5), 1000 );

let turnRandomly2 = Math.floor(Math.random() * 5);
setInterval(() => turnRandomly2 = Math.floor(Math.random() * 5), 1000 );

const aiLogic = (turnRandomly, turnRandomly2, npc, npc2) => {
  if(turnRandomly === 1) {
    npc.positionY = npc.positionY + 3 //up
    npc.y = 4
    npc.x = Math.floor(Math.random() * 3);
  }
  if(turnRandomly === 2) {
    npc.positionX = npc.positionX + 3 // right
    npc.y = 6
    npc.x = Math.floor(Math.random() * 3);
  }
  if(turnRandomly === 3) {
    npc.positionX = npc.positionX - 3 // left
    npc.y = 5
    npc.x = Math.floor(Math.random() * 3);
  }
  if(turnRandomly === 4) {
    npc.positionY = npc.positionY - 3 //down
    npc.y = 7
    npc.x = Math.floor(Math.random() * 3);
  }

  if(turnRandomly2 === 1) {
    npc2.positionY = npc2.positionY + 3 //up
    npc2.y = 4
    npc2.x = 3 + Math.floor(Math.random() * 3);
  }
  if(turnRandomly2 === 2) {
    npc2.positionX = npc2.positionX + 3 // right
    npc2.y = 6
    npc2.x = 3 +Math.floor(Math.random() * 3);
  }
  if(turnRandomly2 === 3) {
    npc2.positionX = npc2.positionX - 3 // left
    npc2.y = 5
    npc2.x = 3 + Math.floor(Math.random() * 3);
  }
  if(turnRandomly2 === 4) {
    npc2.positionY = npc2.positionY - 3 //down
    npc2.y = 7
    npc2.x = 3 + Math.floor(Math.random() * 3);
  }

  if(npc.positionX < 0) {
    npc.positionX = npc.positionX + 10
  }
  if(npc.positionX >= window.innerWidth - 50) {
    npc.positionX = npc.positionX - 10
  }
  if(npc.positionY < 0) {
    npc.positionY = npc.positionY + 10
  }
  if(npc.positionY >= window.innerHeight - 50 ) {
    npc.positionY = npc.positionY - 10
  }

  if(npc2.positionX < 0) {
    npc2.positionX = npc2.positionX + 10
  }
  if(npc2.positionX >= window.innerWidth - 50) {
    npc2.positionX = npc2.positionX - 10
  }
  if(npc2.positionY < 0) {
    npc2.positionY = npc2.positionY + 10
  }
  if(npc2.positionY >= window.innerHeight - 50 ) {
    npc2.positionY = npc2.positionY - 10
  }

}

//simple loop
const gameLoop = () => {
  requestAnimationFrame(gameLoop);

  //update the sprite
  spriteAnimator.updateImageObject(player);
  spriteAnimator.updateImageObject(npc);
  spriteAnimator.updateImageObject(npc2);

  //change the values
  aiLogic(turnRandomly, turnRandomly2, npc, npc2);

}
gameLoop();


//simple event listner for player input
document.onkeydown = (e) => {
  //up
  if (e.keyCode === 87 || e.keyCode === 38){
    player.positionY = player.positionY - 8;
    player.y = 3;
    player.x = Math.floor(Math.random() * 3);
  }
  //left
  if (e.keyCode === 65 || e.keyCode === 37){
    player.positionX = player.positionX - 8;
    player.y = 1;
    player.x = Math.floor(Math.random() * 3);
  }
  //right
  if (e.keyCode === 68 || e.keyCode === 39){
      player.positionX = player.positionX + 8;
      player.y = 2;
      player.x = Math.floor(Math.random() * 3);
  }
  //down
  if (e.keyCode === 83 || e.keyCode === 40){
    player.positionY = player.positionY + 8;
    player.y = 0;
    player.x = Math.floor(Math.random() * 3);
  }
}
