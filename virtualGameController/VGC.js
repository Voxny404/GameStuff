class VGC {
  constructor() {
    //returned value
    this.joystickStateY = null;
    this.joystickStateX = null;

    //threshold
    this.thresholdRightX = 90;
    this.thresholdLeftX = 60;
    this.thresholdDownY = 100;
    this.thresholdUpY = 50;

    //canvas
    this.canvas = '300';
    this.CanvasColor = 'gray';
    this.stickColor = 'white';
  }
  createJoystick() {
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    let  ctx = canvas.getContext('2d');

    canvas.width = this.canvas;
    canvas.height = this.canvas;
    canvas.style.position = 'fixed';
    canvas.style.top = '10px';
    canvas.style.opacity = '.1';
    canvas.style.borderRadius = '200px';
    this.joystickButtons();
    this.joystick(canvas, ctx);
  }

  joystick(canvas, ctx) {

    canvas.addEventListener('touchmove', event => {
      ctx.clearRect(0, 0, this.canvas, this.canvas);
      ctx.beginPath();
      ctx.fillStyle = this.CanvasColor;
      ctx.fillRect(0, 0, this.canvas, this.canvas);
      ctx.fillStyle = this.stickColor;
      ctx.lineWidth = '6';
      ctx.arc(event.changedTouches[0].clientX, event.changedTouches[0].clientY, 40, 0, Math.PI * 2, true);
      ctx.stroke();

      let pointerX = (event.changedTouches[0].clientX + 1) / 2;
      let pointerY =  (event.changedTouches[0].clientY + 1) / 2;

      this.joystickStateX = this.joystickMathX(pointerX);
      this.joystickStateY = this.joystickMathY(pointerY);
    });

    canvas.addEventListener('touchend', event => {
      this.joystickStateX = null;
      this.joystickStateY = null;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.fillStyle = this.CanvasColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, Math.PI * 2, true);
      ctx.stroke();
    });
  }

  joystickMathX(pointerX) {
    if (pointerX < this.thresholdLeftX) return 'LEFT';
    if (pointerX > this.thresholdRightX) return 'RIGHT';
  }

  joystickMathY(pointerY) {
    if (pointerY < this.thresholdUpY) return 'UP';
    if (pointerY > this.thresholdDownY) return 'DOWN';
  }

  joystickButtons() {
    let buttonA = document.createElement('button');
    document.body.appendChild(buttonA);
    buttonA.setAttribute("id", "buttonA");

    let buttonB = document.createElement('button');
    document.body.appendChild(buttonB);
    buttonB.setAttribute("id", "buttonB");

    let buttonStart = document.createElement('button');
    document.body.appendChild(buttonStart);
    buttonStart.setAttribute("id", "buttonStart");

    let buttonSelect = document.createElement('button');
    document.body.appendChild(buttonSelect);
    buttonSelect.setAttribute("id", "buttonSelect");

    buttonA.style.position = 'fixed';
    buttonA.style.bottom = '40px';
    buttonA.style.right = '20px'
    buttonA.style.opacity = '.1';
    buttonA.style.borderRadius = '200px';
    buttonA.innerText = 'A';
    buttonA.style.width = '100px';
    buttonA.style.height = '100px';
    buttonA.style.fontSize = '25px';
    buttonA.style.backgroundColor = 'green';

    buttonB.style.position = 'fixed';
    buttonB.style.bottom = '40px';
    buttonB.style.right = '180px'
    buttonB.style.opacity = '.1';
    buttonB.style.borderRadius = '200px';
    buttonB.innerText = 'B';
    buttonB.style.width = '100px';
    buttonB.style.height = '100px';
    buttonB.style.fontSize = '25px';
    buttonB.style.backgroundColor = 'red';

    buttonStart.style.position = 'fixed';
    buttonStart.style.bottom = '40px';
    buttonStart.style.right = '350px';
    buttonStart.style.opacity = '.1';
    buttonStart.style.borderRadius = '100px';
    buttonStart.innerText = 'START';
    buttonStart.style.width = '100px';
    buttonStart.style.height = '30px';
    buttonStart.style.fontSize = '15px';
    buttonStart.style.backgroundColor = 'black';
    buttonStart.style.color = 'white'

    buttonSelect.style.position = 'fixed';
    buttonSelect.style.bottom = '40px';
    buttonSelect.style.right = '500px';
    buttonSelect.style.opacity = '.1';
    buttonSelect.style.borderRadius = '100px';
    buttonSelect.innerText = 'SELECT';
    buttonSelect.style.width = '100px';
    buttonSelect.style.height = '30px';
    buttonSelect.style.fontSize = '15px';
    buttonSelect.style.backgroundColor = 'black';
    buttonSelect.style.color = 'white'
  }

}
