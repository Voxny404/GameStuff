
// © 2021 by Voxny404
//  _   __                    ____ ___  ____
// | | / /__ __ __ ___  __ __/ / // _ \/ / /
// | |/ / _ \\ \ // _ \/ // /_  _/ // /_  _/
// |___/\___/_\_\/_//_/\_, / /_/ \___/ /_/
//                    /___/
// https://voxny404.github.io/portfolio

const imageLoader = new ImageLoader();
const imageLoaderSecond = new ImageLoader();
const iTitle = new IntroTitle();
const mouse = { x: 0, y: 0 };
let title = 'ZOMBIES!';

let zombies = [];
let zombieCounter = 0;
let scoreIncreaser = 2;
let gameOver = false;
let spawnInterval = 800;
let div = document.createElement('div');

iTitle.createGameTitle(title.toUpperCase(), false);

let gameCanvasIntro = document.getElementById('gameCanvasIntro');
let checker = false;

//intro
setInterval(() => {
  if (iTitle.titleAnimationdone && checker == false) {
    checker = true;
    iTitle.destroy();
    clearInterval();
    createGame();
  }
}, 500);

const createZombies = () => {
  let zombie1 = {
    tileWidth:100,tileHeight: 430, tileZoom: 70,
    x:0, y:0, positionX:Math.floor(Math.random()*(window.innerWidth - 50)) , positionY:0,
    width:60, height:60, id: 'npcAndPlayer', overlay:3
  }
  //imageLoader.createImageObject(zombie1.id);
  zombies.push(zombie1);
  zombieCounter = zombieCounter + 1;
};

let playerArray = [];
let player = {
  tileWidth:90,tileHeight: 430, tileZoom: 70,
  x:1, y:0, positionX:0, positionY:0,
  width:60, height:60, id: 'npcAndPlayer', overlay:3, angle: 0, mouseX: 0, mouseY:0
};

playerArray.push(player);
imageLoader.loadImage('./src/images/map.png');
imageLoader.createScoreBoard();
imageLoader.createImageObject();
imageLoader.createImageObject2();
imageLoader.createShoot();

const gameLoop = () => {
  if (!gameOver) requestAnimationFrame(gameLoop);
  if(zombieCounter > 50) scoreIncreaser = scoreIncreaser + 1;
  if(zombieCounter > 100) scoreIncreaser = scoreIncreaser + 120;

  imageLoader.updateScoreBoard(zombieCounter)
  player.angle = Math.atan2(mouse.y - 150, mouse.x - 150);

  zombies.forEach((item, i) => {
    // collision
    item.positionY = item.positionY + 1;
    if(zombieCounter > 30) item.positionY = item.positionY + Math.floor(Math.random()*4);
    if(zombieCounter > 100) item.positionY = item.positionY + Math.floor(Math.random()*(scoreIncreaser/10000));

    let distanceY = Math.floor(item.positionY - player.mouseY)
    let distanceX = Math.floor(item.positionX - player.mouseX)
    if(distanceY <= 40 && distanceY >= -40 &&
       distanceX <= 40 && distanceX >= -40
     ){
      gameOver = true
      div.innerText = 'GAME OVER';
    }

    if(item.positionY == window.innerHeight - 50){
      gameOver = true
      div.innerText = 'GAME OVER';
    }
    imageLoader.updateImageObject(item, zombies);
  });

  imageLoader.updateImageObject2(player, playerArray);
};

const mouseEvents = (e) => {
  let canvas = document.getElementById('npcAndPlayer')
  const bounds = canvas.getBoundingClientRect();
  mouse.x = e.pageX - bounds.left - scrollX;
  mouse.y = e.pageY - bounds.top - scrollY;
  player.mouseX = mouse.x;
  player.mouseY = mouse.y;
};

const createShoot = (e) => {
  if(!gameOver) {
      imageLoader.drawShootingLine(player);
       new Audio('./src/sounds/shootingSound.mp3').play();
      setTimeout(() => imageLoader.clearShoot(), 50);
  }

  zombies.forEach((item, i) => {
    if (e.clientX <= item.positionX + 20 && e.clientX >= item.positionX - 20) {
      //imageLoader.destroy(item.id);
      zombies.splice(i, 1);
    }
  });
};
const createEventListener = () => {
  document.addEventListener("mousemove", mouseEvents);
  document.addEventListener('click', createShoot);
};
const createGame = () => {
  //background
  const backgroundImage = new Image(window.innerWidth,window.innerHeight);
  backgroundImage.src = './src/images/background.png'
  backgroundImage.style.position = 'fixed';
  backgroundImage.style.top = '0px';
  backgroundImage.style.left = '0px';
  document.body.appendChild(backgroundImage)

  //info text
  div.setAttribute('id', 'info');
  document.body.appendChild(div);
  div.style.position = 'fixed';
  div.style.top = '50%';
  div.style.left = ((window.innerWidth/2) - 100 ) + 'px';
  div.style.fontSize = '30px';
  div.style.color = 'red';
  div.style.fontWeight = 'bold';

  document.body.onselectstart = () => { return false; }

  setInterval(() => {
    if (zombies.length <= scoreIncreaser && !gameOver) createZombies();
  }, spawnInterval);

  createEventListener();
  gameLoop();
};
