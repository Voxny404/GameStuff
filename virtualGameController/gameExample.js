let app = document.getElementById('app');
let p = document.createElement('p');
app.innerText = 'Virtual Controller example';
app.appendChild(p);
p.style.fontSize = '40px';
p.style.textAlign = 'center';

const vgc = new VGC();
vgc.createJoystick();

let buttonA = document.getElementById('buttonA');
let buttonB = document.getElementById('buttonB');
let buttonStart = document.getElementById('buttonStart');
let buttonSelect = document.getElementById('buttonSelect');

const gameAnimation = () => {
  requestAnimationFrame(gameAnimation);

  if (vgc.joystickStateX) p.innerText = vgc.joystickStateX;
  if (vgc.joystickStateY)  p.innerText = vgc.joystickStateY;
};

buttonA.onclick = () => {
  p.innerText = 'A';
};

buttonB.onclick = () => {
  p.innerText = 'B';
};

buttonStart.onclick = () => {
  p.innerText = 'START';
};

buttonSelect.onclick = () => {
  p.innerText = 'SELECT';
};

gameAnimation();
