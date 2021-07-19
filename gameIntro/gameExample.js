const iTitle = new IntroTitle();

let title = 'Simple Intro Exemple'

//the true stands for button display
iTitle.createGameTitle(title.toUpperCase(), true);

//you only can get the element when it is created
let gameCanvasIntro = document.getElementById('gameCanvasIntro');
let checker = false;

//simple animation loop
const animation = () => {

  requestAnimationFrame(animation);

  //if the intro is done hide it when the player interacts
  if (iTitle.titleAnimationdone && checker == false) {
    checker = true;
    console.log('Loading Done');

    //gameCanvasIntro.style.display = 'none';
  }
};

animation();
