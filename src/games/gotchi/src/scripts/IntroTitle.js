class IntroTitle {

  // © 2021 by Voxny404
  //  _   __                    ____ ___  ____
  // | | / /__ __ __ ___  __ __/ / // _ \/ / /
  // | |/ / _ \\ \ // _ \/ // /_  _/ // /_  _/
  // |___/\___/_\_\/_//_/\_, / /_/ \___/ /_/
  //                    /___/
  // https://voxny404.github.io/portfolio

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
    this.brandName(gameCanvasIntro, ctx, gameTitle);
    //this.titleAndEngineName(gameCanvasIntro, ctx, gameTitle);

  }

  brandName(gameCanvasIntro, ctx, gameTitle) {
    ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
    ctx.strokeStyle = 'white';
    ctx.font = '48px 	Verdana';
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('V |', gameCanvasIntro.width / 2, gameCanvasIntro.height / 2);
    }, 2000);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VO |', (gameCanvasIntro.width / 2) - 40, gameCanvasIntro.height / 2);
    }, 2500);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOX |', (gameCanvasIntro.width / 2) - 60, gameCanvasIntro.height / 2);
    }, 3000);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXN |',(gameCanvasIntro.width / 2) - 80, gameCanvasIntro.height / 2);
    }, 3500);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXNY |',(gameCanvasIntro.width / 2) - 100, gameCanvasIntro.height / 2);
    }, 4000);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXNY4 |', (gameCanvasIntro.width / 2) - 120, gameCanvasIntro.height / 2);
    }, 4500);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXNY40 |', (gameCanvasIntro.width / 2) - 140, gameCanvasIntro.height / 2);
    }, 5000);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXNY404 |', (gameCanvasIntro.width / 2) - 140, gameCanvasIntro.height / 2);
    }, 5500);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXNY404 ', (gameCanvasIntro.width / 2) - 140, gameCanvasIntro.height / 2);
    }, 6000);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXNY404 |', (gameCanvasIntro.width / 2) - 140, gameCanvasIntro.height / 2);
    }, 6500);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXNY404 ', (gameCanvasIntro.width / 2) - 140, gameCanvasIntro.height / 2);
    }, 7000);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXNY404 |', (gameCanvasIntro.width / 2) - 140, gameCanvasIntro.height / 2);
    }, 7500);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXNY404 ', (gameCanvasIntro.width / 2) - 140, gameCanvasIntro.height / 2);
    }, 8000);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXNY404 |', (gameCanvasIntro.width / 2) - 140, gameCanvasIntro.height / 2);
    }, 8500);
    setTimeout(() => {
      ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
      ctx.strokeText('VOXNY404 ', (gameCanvasIntro.width / 2) - 140, gameCanvasIntro.height / 2);
      this.titleAndEngineName(gameCanvasIntro, ctx, gameTitle);
    }, 9000);
  }

  titleAndEngineName(gameCanvasIntro, ctx, gameTitle) {
    ctx.fillRect(0, 0, gameCanvasIntro.width, gameCanvasIntro.height);
    ctx.fillStyle = 'white';
    ctx.font = '48px serif';
    ctx.fillText(gameTitle, 0, gameCanvasIntro.height / 2);
    ctx.font = '18px serif';
    ctx.fillStyle = 'gray';
    ctx.globalAlpha = 0.5;
    ctx.fillText('powered by V404 Engine', 10, (gameCanvasIntro.height / 2) + 30);

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

  destroy() {
    let canvas = document.getElementById('gameCanvasIntro');
    if (!canvas) console.log('canvas: gameCanvasIntro is not existing!');
    canvas.remove();
  }

}
