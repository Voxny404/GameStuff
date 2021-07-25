
// © 2021 by Voxny404
//  _   __                    ____ ___  ____
// | | / /__ __ __ ___  __ __/ / // _ \/ / /
// | |/ / _ \\ \ // _ \/ // /_  _/ // /_  _/
// |___/\___/_\_\/_//_/\_, / /_/ \___/ /_/
//                    /___/
// https://voxny404.github.io/portfolio

let spriteAnimator = new ImageLoader();
const iTitle = new IntroTitle();
let time = new Date();

let npcs = null;
let guessNumber = null;
let remainingObjects = null;
let ids = [];
let startTime = null;
let endTime = null;

let info = document.createElement('h1');
let input = document.createElement('input');
let button = document.createElement('button');
let button2 = document.createElement('button');

let title = 'BACTERIAL';
iTitle.createGameTitle(title.toUpperCase(), false);
let checker = false;

//intro
setInterval(() => {
  if (iTitle.titleAnimationdone && checker == false) {
    checker = true;
    iTitle.destroy();
    clearInterval();
    createStartButtons(info, input, button, button2);
  }
}, 500);

const createStartButtons = (info, input, button, button2) => {
  document.body.style.background = '#2E2B7C';

  document.body.appendChild(info);
  info.setAttribute('style', `z-index:2`);
  info.innerText = 'HOW MANY BACTERIA  |  150 MAX';
  info.style.textAlign = 'center';
  info.style.position = 'fixed';
  info.style.left = '200px';
  info.style.top = '200px';
  info.style.color = '#C3C1F5';

  document.body.appendChild(input);
  input.setAttribute('style', `z-index:2`);
  input.style.position = 'fixed';
  input.style.background = '#161458';
  input.style.left = '200px';
  input.style.top = '280px';
  input.style.borderRadius = '10px';
  input.style.outline = 'none';
  input.style.color = 'gray';

  document.body.appendChild(button);
  button.setAttribute('style', `z-index:2`);
  button.style.position = 'fixed';
  button.innerText = 'SELECT';
  button.style.left = '400px';
  button.style.top = '280px';
  button.style.background = '#43409E';
  button.style.borderRadius = '20px';
  button.style.color = '#C3C1F5';

  document.body.appendChild(button2);
  button2.setAttribute('style', `z-index:2`);
  button2.style.display = 'none';
  button2.style.position = 'fixed';
  button2.innerText = 'SELECT';
  button2.style.left = '400px';
  button2.style.top = '280px';
  button2.style.background = '#43409E';
  button2.style.borderRadius = '20px';
  button2.style.color = '#C3C1F5';
};

button.onclick = () => {
  if (input) {
    try {
      npcs = parseInt(input.value);
      if (npcs && npcs <= 150) {
        input.value = '';
        info.innerText = 'PICK A NUMBER';
        button.style.display = 'none';
        button2.style.display = 'block';
        createObjects(npcs);
      } else { info.innerText = 'MAX VALUE IS 150'; }

    } catch (e) { info.innerText = 'not a number'; }
  }
};

//create npcs
const createObjects = (npcs) => {
  for (var i = 0; i < npcs + 1; i++) {
    let npcPlayer = {
      tileWidth: 100, tileHeight: 430, tileZoom: 180,
      x: 0, y: 1, positionX: Math.floor(Math.random() * window.innerWidth),
      positionY: Math.floor(Math.random() * window.innerHeight),
      width: 60, height: 60, id: 'npcPlayer' + [i], overlay: 1, npcsSpeed: 5,
      lvl: 0, color: '#080642',
    };

    //create the elements
    spriteAnimator.createImageObject(npcPlayer.id);
    ids.push(npcPlayer);
    remainingObjects = npcs;
  }
};

const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

//load the image
spriteAnimator.loadImage('./src/images/charMap.png');
spriteAnimator.createScoreBoard();

//animation logic
const npcMover = (npc) => {
  let turnRandomly = Math.floor(Math.random() * 5);

  if (turnRandomly === 1) npc.positionY = npc.positionY + npc.npcsSpeed; //up
  if (turnRandomly === 2) npc.positionX = npc.positionX + npc.npcsSpeed; // right
  if (turnRandomly === 3) npc.positionX = npc.positionX - npc.npcsSpeed; // left
  if (turnRandomly === 4) npc.positionY = npc.positionY - npc.npcsSpeed; //down

  if (npc.positionX < 0) npc.positionX = npc.positionX + 10;
  if (npc.positionX >= window.innerWidth - 50) npc.positionX = npc.positionX - 10;
  if (npc.positionY < 0) npc.positionY = npc.positionY + 10;
  if (npc.positionY >= window.innerHeight - 50) npc.positionY = npc.positionY - 10;
};

//collision logic
const collision = (object, object2, radius) => {
  if (!object) return;
  if (!object2) return;

  let distanceWidth = Math.floor(object.positionX - object2.positionX);
  let distanceHeight = Math.floor(object.positionY - object2.positionY);

  if (distanceWidth <= radius &&
     distanceHeight <= radius &&
     distanceWidth >= -radius &&
     distanceHeight >= -radius
   ) { return true; }
};

//game loop
const gameLoop = () => {
  requestAnimationFrame(gameLoop);

  ids.forEach((item, i) => {
    //update the sprites
    if (i === guessNumber) {
      item.color = 'red';
    }

    spriteAnimator.updateImageObject(item);
    npcMover(item);
  });

  //score count
  spriteAnimator.updateScoreBoard(remainingObjects);

  // checking for collisions
  for (let i = 0; i < ids.length; i++) {
    obj1 = ids[i];
    for (let j = i + 1; j < ids.length; j++) {
      obj2 = ids[j];

      // Compare object1 with object2
      if (collision(obj1, obj2, 10)) {

        obj1.width = obj2.width + 15;
        obj1.height = obj2.height + 15;
        obj1.lvl = obj1.lvl + 1;
        if (obj1.lvl == 3) {
          obj1.x = 2;
        }
        if (obj1.lvl == 5) {
          obj1.x = 5;
          obj1.tileWidth = 110;
        }

        remainingObjects = remainingObjects - 1;

        if (obj1.npcsSpeed >= 3) obj1.npcsSpeed = obj1.npcsSpeed - 1;
        if (guessNumber.toString() === ids[j].id.toString().replace('npcPlayer', '')) {
          endTime = performance.now();
          let timeResult = `${endTime - startTime}`;

          info.style.top = '40%';
          info.style.left = '35%';
          info.style.color = 'red';
          info.innerText = 'GAME OVER  ' + millisToMinutesAndSeconds(timeResult) + ' minutes';
          info.style.display = 'block';
        }

        // remove the object
        delete ids[j];
        spriteAnimator.destroy(obj2.id);
      }
    }
  }

};

button2.onclick = () => {
  if (input) {
    try {
      guessNumber = parseInt(input.value);
      if (guessNumber <= npcs) {
        input.style.display = 'none';
        info.style.display = 'none';
        button2.style.display = 'none';
        gameLoop();
        startTime = performance.now();
      } else { info.innerText = 'Your number is to high or too low!'; }

    } catch (e) { info.innerText = 'not a number'; }
  }
};
