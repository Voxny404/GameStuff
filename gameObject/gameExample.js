let div = document.createElement('div');
document.body.appendChild(div);

div.innerText = 'GAME EXAMPLE';
const gameObject = new GameObject();

//creates a rectangle
gameObject.createGameObjectRect(
  x = Math.random(),
  y = Math.random(),
  width = 100,
  height = 100,
  id = 'GreenObject',
  color = 'green'
);

//creates a rectangle
gameObject.createGameObjectRect(
  x = Math.random(),
  y = Math.random(),
  width = 100,
  height = 100,
  id = 'PurpleObject',
  color = 'purple'
);

//destroies the object with the id green
gameObject.destroyGameObject('green');

let testValueGreenW = 0;
let testValueGreenH = 0;
let testValuePurpleW = 0;
let testValuePurpleH = 0;
let frameW = window.innerWidth;
let frameH = window.innerHeight;

const animaton = () => {

  //calculate the distance between the object
  let distancW = Math.floor(testValueGreenW - testValuePurpleW);
  let distancH = Math.floor(testValueGreenH - testValuePurpleH);

  requestAnimationFrame(animaton);

  //simple canvas collision
  if (distancW <= 100 && distancH <= 100 && distancW >= -100 && distancH >= -100) {
    gameObject.updateGameObjectRect(
      x = testValueGreenW,
      y = testValueGreenH,
      width = 100,
      height = 100,
      id = 'GreenObject',
      color = 'yellow'
    );
    gameObject.updateGameObjectRect(
      x = testValuePurpleW,
      y = testValuePurpleH,
      width = 100,
      height = 100,
      id = 'PurpleObject',
      color = 'blue'
    );
  } else {
    gameObject.updateGameObjectRect(
      x = testValueGreenW,
      y = testValueGreenH,
      width = 100,
      height = 100,
      id = 'GreenObject',
      color = 'green'
    );
    gameObject.updateGameObjectRect(
      x = testValuePurpleW,
      y = testValuePurpleH,
      width = 100,
      height = 100,
      id = 'PurpleObject',
      color = 'purple'
    );
  }

  //move the object and detect screen end
  if (testValueGreenW > frameW) {
    testValueGreenW = Math.random();
  } else {
    testValueGreenW = testValueGreenW + 1 * Math.random();
  }

  if (testValueGreenH > frameH) {
    testValueGreenH = Math.random();
  } else {
    testValueGreenH = testValueGreenH + 5 * Math.random();
  }

  if (testValuePurpleW > frameW) {
    testValuePurpleW = Math.random();

  } else {
    testValuePurpleW = testValuePurpleW + 5 * Math.random();
  }

  if (testValuePurpleH > frameH) {
    testValuePurpleH = Math.random();
  } else {
    testValuePurpleH = testValuePurpleH + 5 * Math.random();
  }

};
console.log(frameW);
animaton();
