class MenuBar {

  // © 2021 by Voxny404
  //  _   __                    ____ ___  ____
  // | | / /__ __ __ ___  __ __/ / // _ \/ / /
  // | |/ / _ \\ \ // _ \/ // /_  _/ // /_  _/
  // |___/\___/_\_\/_//_/\_, / /_/ \___/ /_/
  //                    /___/
  // https://voxny404.github.io/portfolio

  constructor() {

  }

  createMenuBar(overlay, id) {
    let canvas = document.createElement('canvas');
    let div = document.createElement('div');

    canvas.setAttribute('id', 'gameMenuBar_' + id);
    canvas.setAttribute('style', `z-index:${overlay}`);
    div.setAttribute('id', 'DivGameMenuBar_' + id);
    div.appendChild(canvas);
    document.body.appendChild(div);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
  }

  clearMenuBar(id) {
    let canvas = document.getElementById('gameMenuBar_' + id);
    let ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  updateMenuBar(id, options) {
    this.clearMenuBar(id);

    let canvas = document.getElementById('gameMenuBar_' + id);
    if(!canvas) console.log('GameMenuBar : ID NOT EXISTING');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';

    ctx.fillRect(
      20, 50,
      (window.innerWidth / 2) - (window.innerWidth/3),
      (window.innerHeight /3) + 70
    );

    ctx.strokeRect(
      30, 60,
      ((window.innerWidth / 2) - (window.innerWidth/3)) -20 ,
      ((window.innerHeight /3) + 70) - 20
    );

    ctx.fillStyle = 'black';
    ctx.font = 'bold 20px serif';
    ctx.textAlign = 'center';

    ctx.fillText(
      'Menu',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 3) + 10, 100
    );

    ctx.textAlign = 'left';

    if(options == 1) {
      ctx.font = 'bold 18px serif';
      ctx.fillText('> PLAYER',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20 , 150);
      ctx.font = 'bold 15px serif';
      ctx.fillText('   ITEMS',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 180);
      ctx.fillText('   SAVE',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 210);
      ctx.fillText('   SETTINGS',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 240);
      ctx.fillText('   QUIT',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 270);
    }

    if(options == 2) {
      ctx.font = 'bold 15px serif';
      ctx.fillText('   PLAYER',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20 , 150);
      ctx.font = 'bold 18px serif';
      ctx.fillText('> ITEMS',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 180);
      ctx.font = 'bold 15px serif';
      ctx.fillText('   SAVE',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 210);
      ctx.fillText('   SETTINGS',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 240);
      ctx.fillText('   QUIT',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 270);
    }

    if(options == 3) {
      ctx.font = 'bold 15px serif';
      ctx.fillText('   PLAYER',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20 , 150);
      ctx.fillText('   ITEMS',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 180);
      ctx.font = 'bold 18px serif';
      ctx.fillText('> SAVE',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 210);
      ctx.font = 'bold 15px serif';
      ctx.fillText('   SETTINGS',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 240);
      ctx.fillText('   QUIT',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 270);
    }

    if(options == 4) {
      ctx.font = 'bold 15px serif';
      ctx.fillText('   PLAYER',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20 , 150);
      ctx.fillText('   ITEMS',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 180);
      ctx.fillText('   SAVE',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 210);
      ctx.font = 'bold 18px serif';
      ctx.fillText('> SETTINGS',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 240);
      ctx.font = 'bold 15px serif';
      ctx.fillText('   QUIT',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 270);
    }

    if(options == 5) {
      ctx.font = 'bold 15px serif';
      ctx.fillText('   PLAYER',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20 , 150);
      ctx.fillText('   ITEMS',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 180);
      ctx.fillText('   SAVE',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 210);
      ctx.fillText('   SETTINGS',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 240);
      ctx.font = 'bold 18px serif';
      ctx.fillText('> QUIT',
      (((window.innerWidth / 2) - (window.innerWidth / 4)) / 4) - 20, 270);
    }
  }

  destroyMenuBar(id) {
    let div = document.getElementById('DivGameMenuBar_' + id);
    if (!div) {
      console.log(`MenuBar : div is not existing!`);
    } else { div.remove(); }
  }

  hideAndShowMenuBar(id, bool) {
    let div = document.getElementById('DivGameMenuBar_' + id);
    if (!div) {
      console.log(`MenuBar : div is not existing!`);
    } else {
      if(bool) div.style.display = 'block';
      if(!bool) div.style.display = 'none';
    }
  }
}
