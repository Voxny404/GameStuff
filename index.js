document.body.style.background = 'black';

// © 2021 by Voxny404
//  _   __                    ____ ___  ____
// | | / /__ __ __ ___  __ __/ / // _ \/ / /
// | |/ / _ \\ \ // _ \/ // /_  _/ // /_  _/
// |___/\___/_\_\/_//_/\_, / /_/ \___/ /_/
//                    /___/
// https://voxny404.github.io/portfolio

let background = document.createElement('div');
background.setAttribute('id', 'app');
background.style.color = 'white';
background.style.textAlign = 'center';
document.body.appendChild(background);

let app = document.createElement('div');
app.setAttribute('id', 'app');
app.style.color = 'white';
app.style.textAlign = 'center';
document.body.appendChild(app);

let app2 = document.createElement('div');
app2.setAttribute('id', 'app2');
app2.style.color = 'white';
app2.style.textAlign = 'center';
app2.style.display = 'none';
document.body.appendChild(app2);

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
background.appendChild(canvas);

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

  let textA = document.createElement('button');
  textA.setAttribute('id','linkText#'+title)
  textA.innerText = title;
  textA.style.fontSize = '1em';
  textA.style.textDecoration = 'none';
  textA.style.padding = '.5em'
  textA.style.borderRadius =' .5em'
  textA.style.cursor = 'pointer'
  textA.setAttribute('href', location);
  textA.onclick = function () {
   
      window.location.href = location;
  };


  if (action == 'download') textA.setAttribute('download', title);
  if (action == 'switch') textA.onclick = function () {
    switchContent (title, location)
  };
  

  app.appendChild(document.createElement('br'));
  app.appendChild(document.createElement('br'));
  app.appendChild(textA);
}

function switchContent (title, location) {
  if (app2.style.display == 'block') {
    app.style.display = 'block'
    app2.style.display = 'none'
    app2.innerHTML = ''
  } else {
    
    app.style.display = 'none'
    app2.style.display = 'block'
    let h1Title = document.createElement('h1');
    h1Title.style.fontSize = '4em';
    h1Title.innerText = title;
    app2.appendChild(h1Title);


    createLinkText2('Back', location,'switch')
    
    app2.appendChild(document.createElement('br'));
    app2.appendChild(document.createElement('br'));

    let h1Title2 = document.createElement('h1');
    h1Title2.style.fontSize = '2em';
    h1Title2.innerText = 'Download';
    app2.appendChild(h1Title2);

    let textNote = document.createElement('p');
    textNote.style.fontSize = '1em';
    textNote.innerText = 'All parts are required to open the file.';
    app2.appendChild(textNote);

    location.forEach((l, i) => {
  
      createLinkText2(title + ' part ' + (i + 1), l, 'download')
    }) 
  }
}

function createLinkText2(title, location, action) {
  if (!title || !location ) console.error('NO TITLE OR LOCATION SET');

  let textA = document.createElement('button');
  textA.setAttribute('id','linkText#'+title)
  textA.innerText = title;
  textA.style.fontSize = '1em';
  textA.style.textDecoration = 'none';
  textA.style.padding = '.5em'
  textA.style.borderRadius =' .5em'
  textA.style.cursor = 'pointer'
  textA.setAttribute('href', location);
  textA.onclick = function () {
   
      window.location.href = location;
  };


  if (action == 'download') textA.setAttribute('download', location);
  if (action == 'switch') textA.onclick = function () {
    switchContent (title, location)
  };

  app2.appendChild(document.createElement('br'));
  app2.appendChild(document.createElement('br'));
  app2.appendChild(textA);
}

// routs
createTitle('INDEX', '4em')

createTitle('Games', '2em')
createLinkText('Backterial', 'src/games/bacteria/index.html') 
createLinkText('Gotchi', 'src/games/gotchi/index.html') 
createLinkText('Zombies', 'src/games/zombies/index.html') 

createTitle('Downloads', '2em')
createLinkText('Meowville', ['src/games/meowville/meowvillegame-win32-x64.zip','src/games/meowville/meowvillegame-win32-x64.z01', 'src/games/meowville/meowvillegame-win32-x64.z02'], 'switch')
createLinkText('Astro', 'src/games/prototypeAstro/gameProtoTypeEXE.zip', 'download')

createTitle('Else', '2em')
createLinkText('Screen saver', 'src/else/visualPattern/index.html')

// test components
//createTitle('COMPONENTS', '25px')
//createLinkText('CONTROLLER', 'src/components/gameController/gamePad.html') 
//createLinkText('INTRO', 'src/components/gameIntro/gameIntro.html') 
//createLinkText('GAMEOBJECTS', 'src/components/gameObject/gameDisplay.html') 
//createLinkText('IMAGELOADER', 'src/components/imageLoader/gameDisplay.html')
//createLinkText('IMAGELOADER Animation', 'src/components/imageLoader/gameDisplay2.html')
//createLinkText('TEXTOBJECT', 'src/components/textObject/gameDisplay.html')
//createLinkText('VIRTUELCONTROLLER', 'src/components/virtualGameController/exampleVGC.html')
//createLinkText('MENU BAR', 'src/components/menuBar/gameDisplay.html')
//createLinkText('SIMPLE GRAVITY', 'src/components/gravity/gameDisplay.html')