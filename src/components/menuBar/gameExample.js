document.body.style.background = ' black'
let h1 = document.createElement('h1');
h1.style.textAlign = 'center';
h1.style.color = 'white';
h1.innerText = 'MENU BAR EXAMPLE | Hit Enter to test';
document.body.appendChild(h1);

let menuBar = new MenuBar();

//createElement
menuBar.createMenuBar(1,'first');

//displayElement
menuBar.updateMenuBar('first', 1);

let selectonValue = 1;
let isShown = true;

document.onkeydown = (e) => {

  //up
  if (e.keyCode === 87 || e.keyCode === 38) {
    if(selectonValue !== 1) selectonValue = selectonValue - 1
    menuBar.updateMenuBar('first', selectonValue);
  }

  //enter
  if(e.keyCode === 13) {
    if(selectonValue == 1) h1.innerText = 'PLAYER';
    if(selectonValue == 2) h1.innerText = 'ITEMS';
    if(selectonValue == 3) h1.innerText = 'SAVE';
    if(selectonValue == 4) h1.innerText = 'SETTINGS';
    if(selectonValue == 5) h1.innerText = 'QUIT';
  }

  // escape
  if(e.keyCode === 27) {
    if(isShown) {
      menuBar.hideAndShowMenuBar('first', false);
      isShown = false;
    } else {
      menuBar.hideAndShowMenuBar('first', true);
      isShown = true;
    }
  }

  //down
  if (e.keyCode === 83 || e.keyCode === 40) {
    if (selectonValue !== 5) selectonValue = selectonValue + 1;
    menuBar.updateMenuBar('first', selectonValue);
  }
};
