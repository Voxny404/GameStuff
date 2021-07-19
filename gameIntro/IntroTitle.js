class IntroTitle {
  constructor() {
    this.animationMoveValue = 0;
    this.titleAnimationdone = false;
    this.displayButtons = false;
  }

  createGameTitle(gameTitle, gameButtons) {
    let body = document.body;
    let gameCanvasIntro = document.createElement('canvas');
    gameCanvasIntro.setAttribute('id', 'gameCanvasIntro');
    let ctx = gameCanvasIntro.getContext('2d');

    gameCanvasIntro.width = window.innerWidth;
    gameCanvasIntro.height = window.innerHeight;

    body.appendChild(gameCanvasIntro);
    document.body.style.overflow = 'hidden';
    document.body.style.background = 'black';

    if (gameButtons) this.displayButtons = true;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
    ctx.fillStyle = 'white';
    ctx.font = '48px serif';
    ctx.fillText(gameTitle, 0, gameCanvasIntro.height / 2);
    ctx.font = '18px serif';
    ctx.fillStyle = 'gray';
    ctx.globalAlpha = 0.5;
    ctx.fillText('powered by Vengine', 10, (gameCanvasIntro.height / 2) + 30);

    ctx.strokeStyle = 'purple';
    ctx.font = '488px serif';
    ctx.globalAlpha = 0.5;
    ctx.strokeText('V', (gameCanvasIntro.width / 2) + 60, gameCanvasIntro.height - 100);

    setTimeout(() => {
      this.animateV(gameCanvasIntro, ctx);
    }, 2000);
  }

  animateV(gameCanvasIntro, ctx) {
    let animationV = setInterval(() => {
        this.animationMoveValue = this.animationMoveValue + 1;
        ctx.strokeStyle = 'purple';
        ctx.font = '488px serif';
        ctx.globalAlpha = 0.2;
        if (this.animationMoveValue > 50) ctx.strokeStyle = 'rgb(137, 207, 240)';
        ctx.strokeText('V', (gameCanvasIntro.width / 2) + 60, gameCanvasIntro.height - 100);
        ctx.translate(Math.random() / 2, Math.random() / 2);
        if (this.animationMoveValue > 80) {
          clearInterval(animationV);
          this.endIntro(gameCanvasIntro, ctx);
        }
      }, 50);
  }

  endIntro(gameCanvasIntro, ctx) {
    setTimeout(() => {
      if (this.displayButtons) {
        ctx.strokeStyle = 'white';
        ctx.font = '20px serif';
        ctx.globalAlpha = 0.8;
        ctx.strokeText(
          'PRESS ANY BUTTON',
          (gameCanvasIntro.width / 3) + 40,
          gameCanvasIntro.height - 50
        );
      }
      
      this.titleAnimationdone = true;
    }, 4000);
  }

}
