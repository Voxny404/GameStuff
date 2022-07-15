document.body.style.background = 'black';

// © 2021 by Voxny404
//  _   __                    ____ ___  ____
// | | / /__ __ __ ___  __ __/ / // _ \/ / /
// | |/ / _ \\ \ // _ \/ // /_  _/ // /_  _/
// |___/\___/_\_\/_//_/\_, / /_/ \___/ /_/
//                    /___/
// https://voxny404.github.io/portfolio

let app = document.createElement('div');
app.setAttribute('id', 'app');
app.style.color = 'white';
app.style.textAlign = 'center';
document.body.appendChild(app);

let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
let startStars = 150;
canvas.setAttribute('style', 'z-index:-1');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'fixed';
canvas.style.top = '0px';
canvas.style.left = '0px';
ctx.fillStyle = 'white';
canvas.style.animation = "shake 20s infinite";

for (var i = 0; i < startStars; i++) {
  ctx.font = Math.floor(Math.random()*20) + 'px serif';
  ctx.fillText('.', Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight));
}

setInterval(() => {
  ctx.font = Math.floor(Math.random()*20) + 'px serif';
  ctx.fillText('.', Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight));
}, 1000)
app.appendChild(canvas);

// create dom title
function createTitle(title, size) {
  if (!title || !size ) console.error('NO TITLE OR SIZE SET');

  let h1Title = document.createElement('h1');
  h1Title.style.fontSize = size;
  h1Title.innerText = title;
  app.appendChild(h1Title);
}

// create text for dom
function createLinkText(title, location, action) {
  if (!title || !location ) console.error('NO TITLE OR LOCATION SET');

  let textA = document.createElement('a');
  textA.innerText = title;
  textA.style.fontSize = '12px';
  textA.style.textDecoration = 'none';
  textA.setAttribute('href', location);

  if (action == 'download') textA.setAttribute('download', title);

  app.appendChild(document.createElement('br'));
  app.appendChild(textA);
}

// routs
createTitle('INDEX', '45px')

createTitle('GAMES', '25px')
createLinkText('BACKTERIAL', 'src/games/bacteria/index.html') 
createLinkText('GOTCHI', 'src/games/gotchi/index.html') 
createLinkText('ZOMBIES', 'src/games/zombies/index.html') 

createTitle('ProtoTypes', '25px')
createLinkText('Astro', 'src/games/prototypeAstro/gameProtoTypeEXE.zip', 'download')

createTitle('ELSE', '25px')
createLinkText('Virtual Pattern', 'src/else/visualPattern/index.html')

createTitle('COMPONENTS', '25px')
createLinkText('CONTROLLER', 'src/components/gameController/gamePad.html') 
createLinkText('INTRO', 'src/components/gameIntro/gameIntro.html') 
createLinkText('GAMEOBJECTS', 'src/components/gameObject/gameDisplay.html') 
createLinkText('IMAGELOADER', 'src/components/imageLoader/gameDisplay.html')
createLinkText('IMAGELOADER Animation', 'src/components/imageLoader/gameDisplay2.html')
createLinkText('TEXTOBJECT', 'src/components/textObject/gameDisplay.html')
createLinkText('VIRTUELCONTROLLER', 'src/components/virtualGameController/exampleVGC.html')
createLinkText('MENU BAR', 'src/components/menuBar/gameDisplay.html')
createLinkText('SIMPLE GRAVITY', 'src/components/gravity/gameDisplay.html')