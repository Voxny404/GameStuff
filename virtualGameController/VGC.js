class VGC {
  constructor() {
    //returned value
    this.joystickStateY = null;
    this.joystickStateX = null;
    this.joystickStateVisionY = null;
    this.joystickStateVisionX = null;
    this.buttonState = null;
    this.buttonDpadState = null;

    this.buttonTransparancey = '.2';
    this.cssOverFlow = 'z-index: 5';
    this.cssOverFlowVisonControl = 'z-index: -1';

    //threshold
    this.thresholdRightX = 90;
    this.thresholdLeftX = 60;
    this.thresholdDownY = 100;
    this.thresholdUpY = 40;

    this.thresholdVisonRightX = 450;
    this.thresholdVisonLeftX = 348;
    this.thresholdVisonDownY = 180;
    this.thresholdVisonUpY = 100;

    //canvas
    this.canvas = '250';
    this.CanvasColor = 'gray';
    this.stickColor = 'white';

    this.display = true;
  }

  createVisionStick() {
    let div = document.createElement('div');
    div.setAttribute('id', 'visionStick');
    div.setAttribute('style', this.cssOverFlowVisonControl);
    document.body.style.overflow = 'hidden';
    document.body.appendChild(div);

    let canvas = document.createElement('canvas');
    div.appendChild(canvas);
    let  ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.opacity = this.buttonTransparancey;
    this.joystickVision(canvas, ctx);
  }

  joystickVision(canvas, ctx) {
    canvas.addEventListener('touchmove', event => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.fillStyle = "rgba(0, 10, 0, 0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = this.stickColor;
      ctx.lineWidth = '6';
      ctx.arc(event.changedTouches[0].clientX, event.changedTouches[0].clientY, 40, 0, Math.PI * 2, true);
      ctx.stroke();

      let pointerX = (event.changedTouches[0].clientX + 1) / 2;
      let pointerY =  (event.changedTouches[0].clientY + 1) / 2;

      this.joystickStateVisionX = this.joystickVisonMathX(pointerX);
      this.joystickStateVisionY = this.joystickVisonMathY(pointerY);
    });
    canvas.addEventListener('touchend', event => {
      this.joystickStateVisionX = null;
      this.joystickStateVisionY = null;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
  }

  joystickVisonMathX(pointerX) {
    if (pointerX < this.thresholdVisonLeftX) return 'LEFT';
    if (pointerX > this.thresholdVisonRightX) return 'RIGHT';
  }

  joystickVisonMathY(pointerY) {
    if (pointerY < this.thresholdVisonUpY) return 'UP';
    if (pointerY > this.thresholdVisonDownY) return 'DOWN';
  }

  createJoystick() {
    let div = document.createElement('div');
    div.setAttribute('id', 'leftJoystick');
    div.setAttribute('style', this.cssOverFlow);
    document.body.appendChild(div);
    document.body.style.overflow = 'hidden';

    let canvas = document.createElement('canvas');
    canvas.setAttribute('style', this.cssOverFlow);
    div.appendChild(canvas);
    let  ctx = canvas.getContext('2d');

    canvas.width = this.canvas;
    canvas.height = this.canvas;
    canvas.style.position = 'fixed';
    canvas.style.top = '10px';
    canvas.style.opacity = this.buttonTransparancey;
    canvas.style.borderRadius = '200px';
    ctx.fillStyle = this.CanvasColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, Math.PI * 2, true);
    this.joystick(canvas, ctx);
  }

  joystick(canvas, ctx) {

    canvas.addEventListener('touchmove', event => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.fillStyle = this.CanvasColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
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

  createSettingsButton() {
    let div = document.createElement('div');
    div.setAttribute('id', 'joystickSettings');
    div.setAttribute('style', this.cssOverFlow);
    document.body.appendChild(div);

    let joystickSettingsButton = document.createElement('button');
    joystickSettingsButton.setAttribute('id', 'joystickSettingsButton');
    joystickSettingsButton.setAttribute('style', this.cssOverFlow);
    div.appendChild(joystickSettingsButton);

    let leftJoystick = document.getElementById('leftJoystick');
    let joystickButtons = document.getElementById('joystickButtons');
    let dpad = document.getElementById('Dpad');
    let visionStick = document.getElementById('visionStick');

    joystickSettingsButton.style.position = 'fixed';
    joystickSettingsButton.style.top = '10px';
    joystickSettingsButton.style.right = '10px';
    joystickSettingsButton.style.opacity = this.buttonTransparancey;
    joystickSettingsButton.style.borderRadius = '30px';
    joystickSettingsButton.style.width = '50px';
    joystickSettingsButton.style.height = '15px';
    joystickSettingsButton.style.fontSize = '25px';
    joystickSettingsButton.style.backgroundColor = 'gray';
    joystickSettingsButton.style.color = 'white';
    joystickSettingsButton.onclick = () => {

      if (this.display) {
        this.display = false;
        if (leftJoystick) leftJoystick.style.display = 'none';
        if (joystickButtons) joystickButtons.style.display = 'none';
        if (dpad) dpad.style.display = 'none';
        if (visionStick) visionStick.style.display = 'none';
      } else {
        this.display = true;
        if (leftJoystick) leftJoystick.style.display = 'block';
        if (joystickButtons) joystickButtons.style.display = 'block';
        if (dpad) dpad.style.display = 'block';
        if (visionStick) visionStick.style.display = 'block';
      }

    };

  }

  makeDpadButtons() {
    let div = document.createElement('div');
    div.setAttribute('id', 'Dpad');
    div.setAttribute('style', this.cssOverFlow);
    document.body.appendChild(div);

    let dpadUp = document.createElement('button');
    dpadUp.setAttribute('id', 'dpadUp');
    dpadUp.setAttribute('style', this.cssOverFlow);
    div.appendChild(dpadUp);

    let dpadDown = document.createElement('button');
    dpadDown.setAttribute('id', 'dpadUp');
    dpadDown.setAttribute('style', this.cssOverFlow);
    div.appendChild(dpadDown);

    let dpadLeft = document.createElement('button');
    dpadLeft.setAttribute('id', 'dpadUp');
    dpadLeft.setAttribute('style', this.cssOverFlow);
    div.appendChild(dpadLeft);

    let dpadRight = document.createElement('button');
    dpadRight.setAttribute('id', 'dpadUp');
    dpadRight.setAttribute('style', this.cssOverFlow);
    div.appendChild(dpadRight);

    dpadUp.style.position = 'fixed';
    dpadUp.style.bottom = '100px';
    dpadUp.style.left = '100px';
    dpadUp.style.opacity = this.buttonTransparancey;
    dpadUp.style.borderTopLeftRadius = '30px';
    dpadUp.style.borderTopRightRadius = '30px';
    dpadUp.innerText = 'UP';
    dpadUp.style.width = '100px';
    dpadUp.style.height = '50px';
    dpadUp.style.fontSize = '15px';
    dpadUp.style.backgroundColor = 'gray';
    dpadUp.style.color = 'white';
    dpadUp.onclick = () => {
      this.buttonDpadState = 'UP';
      setTimeout(() => {
          this.buttonDpadState = null;
        }, 50);
    };

    dpadDown.style.position = 'fixed';
    dpadDown.style.bottom = '20px';
    dpadDown.style.left = '100px';
    dpadDown.style.opacity = this.buttonTransparancey;
    dpadDown.style.borderBottomLeftRadius = '30px';
    dpadDown.style.borderBottomRightRadius = '30px';
    dpadDown.innerText = 'DOWN';
    dpadDown.style.width = '100px';
    dpadDown.style.height = '50px';
    dpadDown.style.fontSize = '15px';
    dpadDown.style.backgroundColor = 'gray';
    dpadDown.style.position = 'fixed';
    dpadDown.style.color = 'white';
    dpadDown.onclick = () => {
      this.buttonDpadState = 'DOWN';
      setTimeout(() => {
          this.buttonDpadState = null;
        }, 50);
    };

    dpadRight.style.position = 'fixed';
    dpadRight.style.bottom = '60px';
    dpadRight.style.left = '220px';
    dpadRight.style.opacity = this.buttonTransparancey;
    dpadRight.style.borderTopRightRadius = '200px';
    dpadRight.style.borderBottomRightRadius = '200px';
    dpadRight.innerText = '>';
    dpadRight.style.width = '50px';
    dpadRight.style.height = '50px';
    dpadRight.style.fontSize = '20px';
    dpadRight.style.backgroundColor = 'gray';
    dpadRight.style.color = 'white';
    dpadRight.onclick = () => {
      this.buttonDpadState = 'RIGHT';
      setTimeout(() => {
          this.buttonDpadState = null;
        }, 50);
    };

    dpadLeft.style.position = 'fixed';
    dpadLeft.style.bottom = '60px';
    dpadLeft.style.left = '30px';
    dpadLeft.style.opacity = this.buttonTransparancey;
    dpadLeft.style.borderTopLeftRadius = '200px';
    dpadLeft.style.borderBottomLeftRadius = '200px';
    dpadLeft.innerText = '<';
    dpadLeft.style.width = '50px';
    dpadLeft.style.height = '50px';
    dpadLeft.style.fontSize = '20px';
    dpadLeft.style.backgroundColor = 'gray';
    dpadLeft.style.color = 'white';
    dpadLeft.onclick = () => {
      this.buttonDpadState = 'LEFT';
      setTimeout(() => {
          this.buttonDpadState = null;
        }, 50);
    };

  }

  makeJoystickButtons() {
    let div = document.createElement('div');
    div.setAttribute('id', 'joystickButtons');
    div.setAttribute('style', this.cssOverFlow);
    document.body.appendChild(div);

    let buttonA = document.createElement('button');
    div.appendChild(buttonA);
    buttonA.setAttribute("id", "buttonA");
    buttonA.setAttribute('style', this.cssOverFlow);

    let buttonB = document.createElement('button');
    div.appendChild(buttonB);
    buttonB.setAttribute("id", "buttonB");
    buttonB.setAttribute('style', this.cssOverFlow);

    let buttonStart = document.createElement('button');
    div.appendChild(buttonStart);
    buttonStart.setAttribute("id", "buttonStart");
    buttonStart.setAttribute('style', this.cssOverFlow);

    let buttonSelect = document.createElement('button');
    div.appendChild(buttonSelect);
    buttonSelect.setAttribute("id", "buttonSelect");
    buttonSelect.setAttribute('style', this.cssOverFlow);

    buttonA.style.position = 'fixed';
    buttonA.style.bottom = '40px';
    buttonA.style.right = '40px'
    buttonA.style.opacity = this.buttonTransparancey;
    buttonA.style.borderRadius = '200px';
    buttonA.innerText = 'A';
    buttonA.style.width = '80px';
    buttonA.style.height = '80px';
    buttonA.style.fontSize = '25px';
    buttonA.style.backgroundColor = 'green';
    buttonA.style.color = 'white';
    buttonA.onclick = () => {
      this.buttonState = 'A';
      setTimeout(() => {
          this.buttonState = null;
        }, 50);
    };

    buttonB.style.position = 'fixed';
    buttonB.style.bottom = '40px';
    buttonB.style.right = '180px'
    buttonB.style.opacity = this.buttonTransparancey;
    buttonB.style.borderRadius = '200px';
    buttonB.innerText = 'B';
    buttonB.style.width = '80px';
    buttonB.style.height = '80px';
    buttonB.style.fontSize = '25px';
    buttonB.style.backgroundColor = 'red';
    buttonB.style.color = 'white';
    buttonB.onclick = () => {
      this.buttonState = 'B';
      setTimeout(() => {
          this.buttonState = null;
        }, 50);
    };

    buttonStart.style.position = 'fixed';
    buttonStart.style.bottom = '40px';
    buttonStart.style.right = '350px';
    buttonStart.style.opacity = this.buttonTransparancey;
    buttonStart.style.borderRadius = '100px';
    buttonStart.innerText = 'START';
    buttonStart.style.width = '100px';
    buttonStart.style.height = '30px';
    buttonStart.style.fontSize = '15px';
    buttonStart.style.backgroundColor = 'black';
    buttonStart.style.color = 'white';

    buttonStart.onclick = () => {
      this.buttonState =  'START';
      setTimeout(() => {
          this.buttonState = null;
        }, 50);
    };

    buttonSelect.style.position = 'fixed';
    buttonSelect.style.bottom = '40px';
    buttonSelect.style.right = '500px';
    buttonSelect.style.opacity = this.buttonTransparancey;
    buttonSelect.style.borderRadius = '100px';
    buttonSelect.innerText = 'SELECT';
    buttonSelect.style.width = '100px';
    buttonSelect.style.height = '30px';
    buttonSelect.style.fontSize = '15px';
    buttonSelect.style.backgroundColor = 'black';
    buttonSelect.style.color = 'white';

    buttonSelect.onclick = () => {
      this.buttonState =  'SELECT';
      setTimeout(() => {
          this.buttonState = null;
        }, 50);
    };
  }

}
