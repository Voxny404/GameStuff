let body = document.body;
let app = document.getElementById('app');
app.innerText = 'CONTROLLER EXEMPEL';

let gameController = new GC(0);

(async () => {
  let gameListener = await gameController.startListener();
  gameListener ? gameAnimation() : console.log('Controller not connected!');
})();

const gameAnimation = () => {

  requestAnimationFrame(gameAnimation);

  if (gameController.stickLeft()) console.log(gameController.stickLeft());
  if (gameController.stickRight()) console.log(gameController.stickRight());
  if (gameController.button()) console.log(gameController.button());

  if (gameController.stickLeft() === 'S1_Left_MAX') {
    gameController.vibration(100);
    app.innerText = 'S1_Left_Max';
  }
  
  if (gameController.stickLeft() === 'S1_Left') app.innerText = 'S1_Left';

  if (gameController.button() === 'UP') app.innerText = 'UP';
  if (gameController.button() === 'DOWN') app.innerText = 'DOWN';
  if (gameController.button() === 'LEFT') app.innerText = 'LEFT';
  if (gameController.button() === 'RIGHT') app.innerText = 'RIGHT';
};
