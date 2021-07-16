let app = document.getElementById('app');
let p = document.createElement('p');
app.innerText = 'Virtual Controller example';
app.appendChild(p);
p.style.fontSize = '40px';
p.style.textAlign = 'center';

const vgc = new VGC();

vgc.createJoystick();
vgc.createJoystickButtons();
vgc.createDpadButtons();
vgc.createVisionStick();
vgc.createSettingsButton();

const gameAnimation = () => {
  requestAnimationFrame(gameAnimation);

  if (vgc.joystickStateX) p.innerText = vgc.joystickStateX;
  if (vgc.joystickStateY)  p.innerText = vgc.joystickStateY;

  if (vgc.joystickStateVisionY)  p.innerText = vgc.joystickStateVisionY;
  if (vgc.joystickStateVisionX) p.innerText = vgc.joystickStateVisionX;

  if (vgc.buttonState)  p.innerText = vgc.buttonState;
  
  if (vgc.buttonDpadState) p.innerText = vgc.buttonDpadState;

  if (!vgc.joystickStateX &&
      !vgc.joystickStateY &&
      !vgc.buttonState &&
      !vgc.buttonDpadState &&
      !vgc.joystickStateVisionY &&
      !vgc.joystickStateVisionX
    ) {
    p.innerText = '';
  }
};

gameAnimation();
