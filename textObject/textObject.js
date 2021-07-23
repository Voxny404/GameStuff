class TextObject {
  constructor() {
    this.selectorState = null;
  }

  createTextArea(overlay) {
    let canvas = document.createElement('canvas');
    let div = document.createElement('div');
    canvas.setAttribute('id', 'gameTextArea');
    canvas.setAttribute('style', `z-index:${overlay}`);
    div.setAttribute('id', 'gameText');
    div.appendChild(canvas);
    document.body.appendChild(div);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';

    let canvas2 = document.createElement('canvas');
    let div2 = document.createElement('div');
    canvas2.setAttribute('id', 'gameTextAreaSelector');
    canvas2.setAttribute('style', `z-index:${overlay}`);
    div2.setAttribute('id', 'gameTextSelector');
    div2.appendChild(canvas2);
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    canvas2.style.position = 'fixed';
    canvas2.style.top = '0px';
    document.body.appendChild(div2);
  }

  updateTextArea(text) {
    this.clearTextArea('gameTextArea');
    let canvas = document.getElementById('gameTextArea');
    let ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.fillRect(50, canvas.height - 150, canvas.width - 140, 100);
    ctx.strokeRect(55, canvas.height - 145, canvas.width - 150, 90);
    ctx.font = '20px serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';
    ctx.fillText(text, canvas.width / 2, canvas.height - 120);
  }

  clearTextArea(id) {
    let canvas = document.getElementById(id);
    let ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  selecter(value) {
    this.clearTextArea('gameTextAreaSelector');
    let canvas = document.getElementById('gameTextAreaSelector');
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'black';
    if (value) {
      ctx.font = 'bold 20px serif';
      ctx.fillText('> YES', (canvas.width / 2) - 100, canvas.height - 70);
      ctx.fillText('  NO', (canvas.width / 2) + 30, canvas.height - 70);
      this.selectorState = true;
    } else {
      ctx.font = 'bold 20px serif';
      ctx.fillText('  YES',  (canvas.width / 2) - 100, canvas.height - 70);
      ctx.fillText('> NO', (canvas.width / 2) + 30, canvas.height - 70);
      this.selectorState = false;
    }
  }

  destroyTextArea() {
    let div = document.getElementById('gameText');
    if (!div) {
      console.log(`Textarea: gameText is not existing!`);
    } else { div.remove(); }
  }

  destroySelector() {
    let div = document.getElementById('gameTextAreaSelector');
    if (!div) {
      console.log(`Textarea: gameTextAreaSelector is not existing!`);
    } else { div.remove(); }
  }
}
