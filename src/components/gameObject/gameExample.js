let div = document.createElement('div');
document.body.appendChild(div);

div.innerText = 'GAME EXAMPLE';
const gameObject = new GameObject();

//create the rectangle object
let greenRect = {
  x: 0, y: 0, width: 100, height: 100, id: 'GreenObject', color: 'green', overlay: 2,
};

let purpleRect = {
  x: 0, y: 0, width: 100, height: 100, id: 'PurpleObject', color: 'purple', overlay: 1,
};

let player = {
  x: window.innerWidth / 2, y: window.innerHeight / 2, width: 30, height: 30, id: 'player', color: 'red', overlay: 0,
};

//creates the rectangle on the canvas
gameObject.createGameObjectRect(greenRect);

//creates the rectangle on the canvas
gameObject.createGameObjectRect(purpleRect);

//creates the rectangle on the canvas
gameObject.createGameObjectRect(player);

//destroies the object with the id green
gameObject.destroyGameObject('green');

const animaton = () => {

  //greenRect and purpleRect collision object needs to be updated
  let collisionObject = {
    firstX: greenRect.x,
    firstY: greenRect.y,
    secondX: purpleRect.x,
    secondY: purpleRect.y,
    radius: 100,
  };

  let collisionPlayerPurple = {
    firstX: player.x,
    firstY: player.y,
    secondX: purpleRect.x,
    secondY: purpleRect.y,
    radius: 50,
  };

  let collisionPlayerGreen = {
    firstX: player.x,
    firstY: player.y,
    secondX: greenRect.x,
    secondY: greenRect.y,
    radius: 50,
  };

  //restore default
  greenRect.color = 'green';
  purpleRect.color = 'purple';
  player.color = 'red';

  //collision behaviour
  if (gameObject.collision(collisionObject)) {
    greenRect.color = 'yellow';
    purpleRect.color = 'blue';
  }

  if (gameObject.collision(collisionPlayerPurple)) player.color = 'gray';
  if (gameObject.collision(collisionPlayerGreen)) player.color = 'gray';

  //updates the gameObject
  gameObject.updateGameObjectRect(greenRect);
  gameObject.updateGameObjectRect(purpleRect);
  gameObject.updateGameObjectRect(player);

  //move the object
  greenRect.x = greenRect.x + 1 * Math.random();
  greenRect.y = greenRect.y + 5 * Math.random();

  purpleRect.x = purpleRect.x + 5 * Math.random();
  purpleRect.y = purpleRect.y + 5 * Math.random();

  //detect screen end
  if (gameObject.worldCollision(greenRect, 100) === 'X') greenRect.x = Math.random();
  if (gameObject.worldCollision(greenRect, 100) === 'Y') greenRect.y = Math.random();

  if (gameObject.worldCollision(purpleRect) === 'X') purpleRect.x = Math.random();
  if (gameObject.worldCollision(purpleRect) === 'Y') purpleRect.y = Math.random();

  if (gameObject.worldCollision(player) === 'X') player.x = player.x - 120;
  if (gameObject.worldCollision(player) === 'Y') player.y = player.y - 120;
  if (gameObject.worldCollision(player) === '-X') player.x = 1;
  if (gameObject.worldCollision(player) === '-Y') player.y = 1;

  requestAnimationFrame(animaton);
};

//simple event listner for player input
document.onkeydown = (e) => {
  //up
  if (e.keyCode === 87 || e.keyCode === 38) player.y = player.y - 50;
  //left
  if (e.keyCode === 65 || e.keyCode === 37) player.x = player.x - 50;
  //right
  if (e.keyCode === 68 || e.keyCode === 39) player.x = player.x + 50;
  //down
  if (e.keyCode === 83 || e.keyCode === 40) player.y = player.y + 50;
}

animaton();
