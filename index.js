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

let h1Title = document.createElement('h1');
h1Title.style.fontSize = '45px';
h1Title.innerText = 'INDEX';
app.appendChild(h1Title);

let h3TitleGame = document.createElement('h3');
h3TitleGame.innerText = 'GAMES';
h3TitleGame.style.fontSize = '25px';
app.appendChild(document.createElement('br'));
app.appendChild(h3TitleGame);

let bacterial = document.createElement('a');
bacterial.innerText = 'BACKTERIAL';
bacterial.style.fontSize = '12px';
bacterial.style.textDecoration = 'none';
bacterial.setAttribute('href', 'src/games/bacteria/index.html');
app.appendChild(document.createElement('br'));
app.appendChild(bacterial);

app.appendChild(document.createElement('br'));
let h3Title = document.createElement('h3');
h3Title.innerText = 'COMPONENTS';
h3Title.style.fontSize = '25px';
app.appendChild(document.createElement('br'));
app.appendChild(h3Title);

let gameController = document.createElement('a');
gameController.innerText = 'CONTROLLER';
gameController.style.fontSize = '12px';
gameController.style.textDecoration = 'none';
gameController.setAttribute('href', 'src/components/gameController/gamePad.html');
app.appendChild(document.createElement('br'));
app.appendChild(gameController);

let gameIntro = document.createElement('a');
gameIntro.innerText = 'INTRO';
gameIntro.style.fontSize = '12px';
gameIntro.style.textDecoration = 'none';
gameIntro.setAttribute('href', 'src/components/gameIntro/gameIntro.html');
app.appendChild(document.createElement('br'));
app.appendChild(gameIntro);

let gameObject = document.createElement('a');
gameObject.innerText = 'GAMEOBJECTS';
gameObject.style.fontSize = '12px';
gameObject.style.textDecoration = 'none';
gameObject.setAttribute('href', 'src/components/gameObject/gameDisplay.html');
app.appendChild(document.createElement('br'));
app.appendChild(gameObject);

let imageLoader = document.createElement('a');
imageLoader.innerText = 'IMAGELOADER';
imageLoader.style.fontSize = '12px';
imageLoader.style.textDecoration = 'none';
imageLoader.setAttribute('href', 'src/components/imageLoader/gameDisplay.html');
app.appendChild(document.createElement('br'));
app.appendChild(imageLoader);

let imageLoader2 = document.createElement('a');
imageLoader2.innerText = 'IMAGELOADER Animation';
imageLoader2.style.fontSize = '12px';
imageLoader2.style.textDecoration = 'none';
imageLoader2.setAttribute('href', 'src/components/imageLoader/gameDisplay2.html');
app.appendChild(document.createElement('br'));
app.appendChild(imageLoader2);

let textObject = document.createElement('a');
textObject.innerText = 'TEXTOBJECT';
textObject.style.fontSize = '12px';
textObject.style.textDecoration = 'none';
textObject.setAttribute('href', 'src/components/textObject/gameDisplay.html');
app.appendChild(document.createElement('br'));
app.appendChild(textObject);

let virtuelController = document.createElement('a');
virtuelController.innerText = 'VIRTUELCONTROLLER';
virtuelController.style.fontSize = '12px';
virtuelController.style.textDecoration = 'none';
virtuelController.setAttribute('href','src/components/virtualGameController/exampleVGC.html');
app.appendChild(document.createElement('br'));
app.appendChild(virtuelController);

let menuBar = document.createElement('a');
menuBar.innerText = 'MENU BAR';
menuBar.style.fontSize = '12px';
menuBar.style.textDecoration = 'none';
menuBar.setAttribute('href','src/components/menuBar/gameDisplay.html');
app.appendChild(document.createElement('br'));
app.appendChild(menuBar);

let gravity = document.createElement('a');
gravity.innerText = 'SIMPLE GRAVITY';
gravity.style.fontSize = '12px';
gravity.style.textDecoration = 'none';
gravity.setAttribute('href','src/components/gravity/gameDisplay.html');
app.appendChild(document.createElement('br'));
app.appendChild(gravity);
