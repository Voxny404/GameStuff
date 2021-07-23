let textObject = new TextObject();

textObject.createTextArea(1);
textObject.updateTextArea('This is an example question do you like it ?');
textObject.selecter(true);

document.onkeydown = (e) => {

  //up
  if (e.keyCode === 87 || e.keyCode === 38) {
    if (textObject.selectorState) {
      textObject.updateTextArea(`Your answere is ${textObject.selectorState}`);
    } else {
      textObject.updateTextArea(`to bad you said ${textObject.selectorState} !!!`);
    }
  }

  //left
  if (e.keyCode === 65 || e.keyCode === 37) textObject.selecter(true);

  //right
  if (e.keyCode === 68 || e.keyCode === 39) textObject.selecter();

  //down
  if (e.keyCode === 83 || e.keyCode === 40) {
    textObject.destroySelector();
    textObject.destroyTextArea();
  }
};
