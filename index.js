document.body.style.background = 'black'

let that = window.location.toString();

let app = document.createElement('div');
app.setAttribute('id','app');
app.style.color = 'white';
app.style.textAlign = 'center';
document.body.appendChild(app);

let h1Title = document.createElement('h1');
h1Title.innerText = 'INDEX';
app.appendChild(h1Title);

let h3Title = document.createElement('h3');
h3Title.innerText = 'COMPONENTS';
app.appendChild(document.createElement('br'));
app.appendChild(h3Title);

let gameController = document.createElement('a');
gameController.innerText = 'gameController';
gameController.setAttribute('href', that.replace('index.html','') + 'src/gameController/gamePad.html');
app.appendChild(document.createElement('br'));
app.appendChild(gameController);

let gameIntro = document.createElement('a');
gameIntro.innerText = 'gameIntro';
gameIntro.setAttribute('href', that.replace('index.html','') + 'src/gameIntro/gameIntro.html');
app.appendChild(document.createElement('br'));
app.appendChild(gameIntro);

let gameObject = document.createElement('a');
gameObject.innerText = 'gameObject';
gameObject.setAttribute('href', that.replace('index.html','') + 'src/gameObject/gameDisplay.html');
app.appendChild(document.createElement('br'));
app.appendChild(gameObject);

let imageLoader = document.createElement('a');
imageLoader.innerText = 'imageLoader';
imageLoader.setAttribute('href', that.replace('index.html','') + 'src/imageLoader/gameDisplay.html');
app.appendChild(document.createElement('br'));
app.appendChild(imageLoader);

let imageLoader2 = document.createElement('a');
imageLoader2.innerText = 'ImageLoader Animation';
imageLoader2.setAttribute('href', that.replace('index.html','') + 'src/imageLoader/gameDisplay2.html');
app.appendChild(document.createElement('br'));
app.appendChild(imageLoader2);

let textObject = document.createElement('a');
textObject.innerText = 'textObject';
textObject.setAttribute('href', that.replace('index.html','') + 'src/textObject/gameDisplay.html');
app.appendChild(document.createElement('br'));
app.appendChild(textObject);

let virtuelController = document.createElement('a');
virtuelController.innerText = 'virtuelGameController';
virtuelController.setAttribute('href', that.replace('index.html','') + 'src/virtualGameController/exampleVGC.html');
app.appendChild(document.createElement('br'));
app.appendChild(virtuelController);
