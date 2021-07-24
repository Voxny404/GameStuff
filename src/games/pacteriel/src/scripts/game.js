let spriteAnimator = new ImageLoader();
const iTitle = new IntroTitle();
let npcs = null;
let guessNumber = null;
let remainingObjects = null;

let info = document.createElement('h1');
let input = document.createElement('input');
let button = document.createElement('button');
let button2 = document.createElement('button');

let title = 'BACTERIAL';
iTitle.createGameTitle(title.toUpperCase(), false);
let checker = false;

setInterval(() => {
  //if the intro is done hide it when the player interacts
  if (iTitle.titleAnimationdone && checker == false) {
    checker = true;
    iTitle.destroy();
    clearInterval();
    createStartButtons(info, input, button, button2);
  }
}, 500);

const createStartButtons = (info, input, button, button2) => {
  document.body.style.background = 'white';

  document.body.appendChild(info)
  info.setAttribute('style', `z-index:2`);
  info.innerText = 'How many'
  info.style.position = 'fixed'
  info.style.left = '45%'
  info.style.top = '40%'

  document.body.appendChild(input)
  input.setAttribute('style', `z-index:2`);
  input.style.position = 'fixed'
  input.style.left = '45%'
  input.style.top = '50%'

  document.body.appendChild(button);
  button.setAttribute('style', `z-index:2`);
  button.style.position = 'fixed'
  button.innerText = 'select'
  button.style.left = '45%'
  button.style.top = '55%'

  document.body.appendChild(button2);
  button2.setAttribute('style', `z-index:2`);
  button2.style.display = 'none';
  button2.style.position = 'fixed'
  button2.innerText = 'select'
  button2.style.left = '45%'
  button2.style.top = '55%'
}

button.onclick = () => {
  if (input){
    try {
      npcs = parseInt(input.value)
      if(npcs && npcs <= 150){
        input.value = ''
        info.innerText = 'Pick a number';
        button.style.display = 'none';
        button2.style.display = 'block';
        createObjects(npcs)
      } else {
        info.innerText = '150 is max or no value set'
      }

    } catch (e) {
      info.innerText = 'not a number'
    }
  }
}

let npcsSpeed = 5;
let ids = []

const createObjects = (npcs) => {
  for (var i = 0; i < npcs + 1; i++) {
    let npcPlayer = {
      tileWidth: 100, tileHeight:430, tileZoom: 180,
      x: 2, y: 1, positionX: Math.floor(Math.random() *window.innerWidth), positionY: Math.floor(Math.random() *window.innerHeight),
      width: 60, height: 60, id: 'npcPlayer'+[i], overlay: 1, npcsSpeed: 9, lvl:0
    }
    //create the elements
    spriteAnimator.createImageObject(npcPlayer.id);
    ids.push(npcPlayer);
    remainingObjects = npcs;
  }
}


//load the image
spriteAnimator.loadImage('./src/images/charMap.png');
spriteAnimator.createScoreBoard();

const npcMover = (npc) => {
  let turnRandomly = Math.floor(Math.random() * 5);

  if (turnRandomly === 1) npc.positionY = npc.positionY + npc.npcsSpeed; //up
  if (turnRandomly === 2) npc.positionX = npc.positionX + npc.npcsSpeed; // right
  if (turnRandomly === 3) npc.positionX = npc.positionX - npc.npcsSpeed; // left
  if (turnRandomly === 4) npc.positionY = npc.positionY - npc.npcsSpeed; //down

  if (npc.positionX < 0) npc.positionX = npc.positionX + 10;
  if (npc.positionX >= window.innerWidth - 50) npc.positionX = npc.positionX - 10;
  if (npc.positionY < 0) npc.positionY = npc.positionY + 10;
  if (npc.positionY >= window.innerHeight - 50 ) npc.positionY = npc.positionY - 10;
};

const collision = (object, object2, radius) => {
  if(!object) return
  if(!object2) return
  let distanceWidth = Math.floor(object.positionX - object2.positionX);
  let distanceHeight = Math.floor(object.positionY - object2.positionY);

  if (distanceWidth <= radius &&
     distanceHeight <= radius &&
     distanceWidth >= -radius &&
     distanceHeight >= -radius
   ) { return true; }
};

const gameLoop = () => {
  requestAnimationFrame(gameLoop);
  ids.forEach((item) => {
    //update the sprites
    spriteAnimator.updateImageObject(item);
    npcMover(item)
  });
  spriteAnimator.updateScoreBoard(remainingObjects)
  // checking for collisions
  for (let i = 0; i < ids.length; i++)
  {
      obj1 = ids[i];
      for (let j = i + 1; j < ids.length; j++)
      {
          obj2 = ids[j];

          // Compare object1 with object2
          if (collision(obj1, obj2, 10)) {

              obj1.width = obj2.width + 15;
              obj1.height = obj2.height + 15;
              obj1.lvl = obj1.lvl + 1;
              remainingObjects = remainingObjects - 1;
              if (obj1.npcsSpeed >= 3) obj1.npcsSpeed = obj1.npcsSpeed - 1;
              if (guessNumber.toString() === ids[j].id.toString().replace('npcPlayer', '')){
                console.log('oh NO');
                cancelAnimationFrame(gameLoop)
                info.innerText = 'GAME OVER';
                info.style.display = 'block';
              }
              delete ids[j];
              spriteAnimator.destroy(obj2.id);
          }
      }
  }

}

button2.onclick = () => {
  if (input){
    try {
      guessNumber = parseInt(input.value)
      if(guessNumber <= npcs) {
        input.style.display = 'none';
        info.style.display = 'none';
        button2.style.display = 'none';
        gameLoop();
      } else {
        info.innerText = 'wrong value'
      }

    } catch (e) {
      info.innerText = 'not a number'
    }
  }
}
