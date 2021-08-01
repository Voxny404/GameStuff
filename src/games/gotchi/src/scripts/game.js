const imageLoader = new ImageLoader();
const iTitle = new IntroTitle();
const timeStart = new Date();
let status = document.createElement('p');
let timeDisplay = document.createElement('p');
imageLoader.loadImage('./src/images/gotchiMap.png');

//intro
let title = 'Gotchi';
iTitle.createGameTitle(title.toUpperCase(), false);
let checker = false;
setInterval(() => {
  if (iTitle.titleAnimationdone && checker == false) {
    checker = true;
    console.log('Loading Done');
    iTitle.destroy();
    clearInterval();
    createButtons();
    startGame();
  }
}, 100)

gotchiArray = [];
// poisonIcon.x = 1; poisonIcon.tileZoom = 18; poisonIcon.y = 27
// poisonIcon.tileWidth = 30; poisonIcon.tileHeight = 31.91
let poisonIcon = {
  tileWidth: 32, tileHeight:32.6, tileZoom: 38,
  x: 15, y: 27, positionX: (window.innerWidth / 2 )+50, positionY: (window.innerHeight / 2) - 70,
  width: 60, height: 60, id: 'poison', overlay: 0
};

let poopIcon = {
  tileWidth: 32, tileHeight:31.91, tileZoom: 18,
  x: 1, y: 27, positionX: (window.innerWidth / 2 )+50, positionY: (window.innerHeight / 2) - 40,
  width: 60, height: 60, id: 'poop', overlay: 0
}// 32.6

let sleepIcon = {
  tileWidth: 32.6, tileHeight:32.6, tileZoom: 18,
  x: 1, y: 27, positionX: (window.innerWidth / 2 )+90, positionY: (window.innerHeight / 2) - 70,
  width: 30, height: 30, id: 'sleep', overlay: 0
}

let gotchiEgg = { // x max is 4
  tileWidth: 33, tileHeight:30, tileZoom: 26,
  x: 0, y: 27, positionX: window.innerWidth / 2, positionY: window.innerHeight / 2,
  width: 60, height: 60, id: 'gotchi', overlay: 1
};

let gotchiEgg2 = { // x max is 4
  tileWidth: 31, tileHeight:29.8, tileZoom: 25,
  x: 0, y: 28, positionX: window.innerWidth / 2, positionY: window.innerHeight / 2,
  width: 60, height: 60, id: 'gotchi', overlay: 1,
  sleeping: false, poisoned: false, pooped: false, hungry: false, dead: false, sleepy:false
};

let stage = 0;
let randomEvolve = Math.floor(Math.random() * 7);

let hunger = 0;
let feed = 0;
let poop = 0;
let sleep = 0;
let poison = 0;
let deathCounter = 0;
let exp = 0;

gotchiArray.push(gotchiEgg2);
imageLoader.createImageObject(gotchiEgg2.id);
imageLoader.createImageObject(poopIcon.id);
imageLoader.createImageObject(poisonIcon.id);
imageLoader.createImageObject(sleepIcon.id);

const startGame = () => {
  const game = setInterval(() => {
    let time = new Date();
    timeDisplay.innerText = time.toString().slice(15,25);
    let timeEvent = timeStart.getMinutes() - time.getMinutes();
    let randomizer = Math.floor(Math.random()*7)

    //timebased events
    if(exp >= -1) stage = 0;
    if(exp >= 1.5 && stage <= 0) stage = 1;
    if(exp >= 10 && stage <= 1) stage = 2;
    if(exp >= 20 && stage <= 2) stage = 3;
    if(exp >= 30 && stage <= 3) stage = 4;

    if(timeEvent <= 59 && timeEvent >= 58) timeEvent = 0

    //pet logic
    sleep = sleep + 0.02;
    hunger = hunger + 0.08;
    exp = exp + 0.03;

    //console.log(stage + ' ' +exp);
    if(hunger >= 5 && hunger <= 10){
      sleep = sleep + 1;
      gotchiEgg2.hungry = true;
    //  console.log('hungry');
    }

    if(hunger >= 10){
      deathCounter = deathCounter + 1;
      gotchiEgg2.hungry = true;
    //  console.log('starving');
    }

    if(feed >= 5) {
      poop = poop + 0.1;
    }

    if(poop >= 15 && gotchiEgg2.poisoned == false){
      gotchiEgg2.pooped = true;
      poopIcon.x = 1
      poison = poison + 1;
    //  console.log('pooped');
    }

    if(gotchiEgg2.pooped == false) {
      poopIcon.x = 100
    }
    if(poison >= 10){
      gotchiEgg2.poisoned = true;
      poisonIcon.x = 15
      deathCounter = deathCounter + 5;
    //  console.log('poisoned');
    }
    if(gotchiEgg2.poisoned == false) poisonIcon.x = 100
    if(sleep >= 5 && sleep <= 10 && gotchiEgg2.sleeping == false){
      gotchiEgg2.sleepy = true;
    //  console.log('tired');
    }

    if(sleep >= 10  && gotchiEgg2.sleeping == false){
      deathCounter = deathCounter + 1;
    //  console.log('felt asleep');
      gotchiEgg2.sleeping = true
    }

    if(sleep >= 0 && gotchiEgg2.sleeping == true){
      sleep = sleep - 1;
    }
    if(gotchiEgg2.sleeping){
        sleepIcon.x = 1;
    }
    if(!gotchiEgg2.sleeping) sleepIcon.x = 100;
    if(sleep <= 0 && gotchiEgg2.sleeping == true) {
      gotchiEgg2.sleeping = false;
      gotchiEgg2.sleepy = false;
    }

    if(deathCounter >= 100){
      gotchiEgg2.dead = true;
      gotchiEgg2.tileWidth = 32; gotchiEgg2.tileHeight = 32.6; gotchiEgg2.tileZoom = 38;
      gotchiEgg2.x = 15; gotchiEgg2.y = 27;
      gotchiEgg2.width = 160; gotchiEgg2.height= 160;
      console.log('dead');
      clearInterval(game);
    }

    //imageLoader.updateImageObject(gotchi);
    //console.log(timeEvent + ' '+ gotchiEgg2.x);
    // console.log('hunger : ' + hunger);
    // console.log('poop : ' + poop);
    //console.log('sleep : ' + sleep);
    // console.log('poison : ' + poison);
    //console.log('deathCounter : ' + deathCounter);
    //egg animation
    if(stage == 0 && !gotchiEgg2.dead) {
      if(gotchiEgg2.x === 2) gotchiEgg2.x = 0
      gotchiEgg2.x = gotchiEgg2.x + 1
    }

    if(stage === 1 && stage !== 2 && !gotchiEgg2.dead){

      //evolve from egg
      if(gotchiEgg2.x === 2 || gotchiEgg2.x === 1) gotchiEgg2.x = 3;
      if(gotchiEgg2.x === 3) setTimeout(() => gotchiEgg2.x = gotchiEgg2.x + 1, 100);
      if(gotchiEgg2.x === 4) setTimeout(() => gotchiEgg2.x = gotchiEgg2.x + 1, 100);

      //first stage
      if(gotchiEgg2.x >= 5 || gotchiEgg2.y === 0) {
        if(gotchiEgg2.y !== 0 && gotchiEgg2.x !== 0) {
          gotchiEgg2.tileWidth = 32; gotchiEgg2.tileHeight = 30;
          gotchiEgg2.tileZoom = 30; gotchiEgg2.x = 0; gotchiEgg2.y = 0;
        }
        setTimeout(() => {

          //character movement
          if(randomizer == 1) gotchiEgg2.positionX = gotchiEgg2.positionX + 10;
          if(randomizer == 2) gotchiEgg2.positionX = gotchiEgg2.positionX - 10;

          //sprit display
          gotchiEgg2.x = randomizer

        }, 100)
      }
    }

    //stage 2
    if(stage === 2 && !gotchiEgg2.dead){
      if(gotchiEgg2.y !== 3 && gotchiEgg2.x !== 0) {
        gotchiEgg2.tileWidth = 32; gotchiEgg2.tileHeight = 30;
        gotchiEgg2.tileZoom = 30; gotchiEgg2.x = 0; gotchiEgg2.y = 3;
      }
      setTimeout(() => {

        //character movement
        if(randomizer == 1) gotchiEgg2.positionX = gotchiEgg2.positionX + 10;
        if(randomizer == 2) gotchiEgg2.positionX = gotchiEgg2.positionX - 10;

        //sprit display
        gotchiEgg2.x = randomizer

      }, 100)
    }

    //stage 3
    if(stage === 3 && !gotchiEgg2.dead){
      if(gotchiEgg2.y !== 4 && gotchiEgg2.x !== 0) {
        gotchiEgg2.tileWidth = 32; gotchiEgg2.tileHeight = 32;
        gotchiEgg2.tileZoom = 30; gotchiEgg2.x = 0; gotchiEgg2.y = 4;
      }
      setTimeout(() => {

        //character movement
        if(randomizer == 1) gotchiEgg2.positionX = gotchiEgg2.positionX + 10;
        if(randomizer == 2) gotchiEgg2.positionX = gotchiEgg2.positionX - 10;

        //sprit display
        gotchiEgg2.x = randomizer

      }, 100)
    }

    //stage 4
    if(stage === 4 && !gotchiEgg2.dead){
      let evolveValue = 0;

      //random evolution state
      if(randomEvolve == 1) evolveValue = 9
      if(randomEvolve == 2) evolveValue = 11
      if(randomEvolve == 3) evolveValue = 13
      if(randomEvolve == 4) evolveValue = 16
      if(randomEvolve == 5) evolveValue = 17
      if(randomEvolve == 6) evolveValue = 18

      if(gotchiEgg2.y !== evolveValue && gotchiEgg2.x !== 0) {
        gotchiEgg2.tileWidth = 32; gotchiEgg2.tileHeight = 32;
        gotchiEgg2.tileZoom = 32; gotchiEgg2.x = 0; gotchiEgg2.y = evolveValue;
      }
      setTimeout(() => {

        //character movement
        if(randomizer == 1) gotchiEgg2.positionX = gotchiEgg2.positionX + 10;
        if(randomizer == 2) gotchiEgg2.positionX = gotchiEgg2.positionX - 10;

        //sprit display
        gotchiEgg2.x = randomizer

      }, 100)
    }
    let hungerColor = 'green';
    let sleepColor = 'green';
    let poisonedColor = 'green';
    if(gotchiEgg2.hungry) hungerColor = 'red'
    if(gotchiEgg2.sleepy) sleepColor = 'red'
    if(gotchiEgg2.poisoned) poisonedColor = 'red'
    status.innerHTML = '<a>Hungry : <a style="color:'+hungerColor+'">'+gotchiEgg2.hungry+'</a>    </a>'+
                       '<a>Sleepy : <a style="color:'+sleepColor+'">'+gotchiEgg2.sleepy+'</a>     </a>'+
                       '<a>Poisoned : <a style="color:'+poisonedColor+'">'+gotchiEgg2.poisoned+'</a>   </a>'

    imageLoader.updateImageObject(sleepIcon);
    imageLoader.updateImageObject(poisonIcon);
    imageLoader.updateImageObject(poopIcon);
    imageLoader.updateImageObjectOnce(gotchiEgg2, gotchiArray);
  },1000);
}

const createButtons = () => {
  document.body.style.background = 'white';
  let hungerButton = document.createElement('button');
  hungerButton.innerText = 'Feed';
  hungerButton.setAttribute('style', 'z-index:2')
  hungerButton.style.position = 'fixed'
  hungerButton.style.left = ((window.innerWidth / 2)-180) +"px"
  hungerButton.style.top = (window.innerHeight - 50) +"px"
  hungerButton.style.borderRadius = '10px';
  hungerButton.style.background = 'green';
  hungerButton.style.color = 'white';
  document.body.appendChild(hungerButton)
  hungerButton.onclick = () => {
    if(!gotchiEgg2.sleeping && gotchiEgg2.hungry) {
      feed = feed + 5;
      gotchiEgg2.hungry = false;
      hunger = hunger - 10;
      exp = exp + 0.5;
    }
  };

  let wakeButton = document.createElement('button');
  wakeButton.innerText = 'sleep';
  wakeButton.setAttribute('style', 'z-index:2')
  wakeButton.style.position = 'fixed'
  wakeButton.style.left = ((window.innerWidth / 2)-80) +"px"
  wakeButton.style.top = (window.innerHeight - 50) +"px"
  wakeButton.style.borderRadius = '10px';
  wakeButton.style.background = 'green';
  wakeButton.style.color = 'white';
  document.body.appendChild(wakeButton)
  wakeButton.onclick = () => {
    if(gotchiEgg2.sleeping) {
      gotchiEgg2.sleeping = false;
    } else {
      gotchiEgg2.sleeping = true;
    }
  };

  let cureButton = document.createElement('button');
  cureButton.innerText = 'cure';
  cureButton.setAttribute('style', 'z-index:2')
  cureButton.style.position = 'fixed'
  cureButton.style.left = (window.innerWidth / 2)+20 +"px"
  cureButton.style.top = (window.innerHeight - 50) +"px"
  cureButton.style.borderRadius = '10px';
  cureButton.style.background = 'green';
  cureButton.style.color = 'white';
  document.body.appendChild(cureButton)
  cureButton.onclick = () => {
    if(gotchiEgg2.poisoned) {
      gotchiEgg2.poisoned = false;
      poison = 0
    }
  };

  let poopButton = document.createElement('button');
  poopButton.innerText = 'clean';
  poopButton.setAttribute('style', 'z-index:2')
  poopButton.style.position = 'fixed'
  poopButton.style.left = ((window.innerWidth / 2)+120) +"px"
  poopButton.style.top = (window.innerHeight - 50) +"px"
  poopButton.style.borderRadius = '10px';
  poopButton.style.background = 'green';
  poopButton.style.color = 'white';
  document.body.appendChild(poopButton)
  poopButton.onclick = () => {
    if(gotchiEgg2.pooped) {
      gotchiEgg2.pooped = false;
      poop = 0
    }
  };

  timeDisplay.setAttribute('style', 'z-index:2')
  timeDisplay.style.position = 'fixed';
  timeDisplay.style.fontSize = '40px'
  timeDisplay.style.fontWeight = '700';
  timeDisplay.style.left = ((window.innerWidth / 2)-70) +"px"
  timeDisplay.style.top = (window.innerHeight / 6) +"px"

  document.body.appendChild(timeDisplay)

  status.setAttribute('style', 'z-index:2');
  status.style.position = 'fixed';
  status.style.fontWeight = '700';
  status.style.left = ((window.innerWidth / 2) -160 )+"px";
  document.body.appendChild(status);
}



// const gameLoop = () => {
//   requestAnimationFrame(gameLoop);
//   //imageLoader.updateImageObject(gotchi);
//
//   imageLoader.updateImageObject(poopIcon);
//   poopIcon.x = 1; poopIcon.tileZoom = 29; poopIcon.y = 27
//   poopIcon.tileWidth = 32; poopIcon.tileHeight = 32.6
// }
// gameLoop();
//imageLoader.updateImageObjectOnce(gotchi, gotchiArray);
