class GC {

// © 2021 by Voxny404
//  _   __                    ____ ___  ____
// | | / /__ __ __ ___  __ __/ / // _ \/ / /
// | |/ / _ \\ \ // _ \/ // /_  _/ // /_  _/
// |___/\___/_\_\/_//_/\_, / /_/ \___/ /_/
//                    /___/
// https://voxny404.github.io/portfolio

  constructor(player) {
    this.rightAndDownThreshold = 0.6;
    this.leftAndUpThreshold = 0.3;
    this.rightAndDownFinalThreshold = 0.8;
    this.leftAndUpFinalThreshold = 0.1;
    this.buttonMap = ['A', 'B', 'X', 'Y', 'L1', 'R1', 'L2', 'R2', 'SELECT', 'START', 'L3', 'R3', 'UP', 'DOWN', 'LEFT', 'RIGHT', 'SYMBOLE'];
    this.player = player;
  }

  startListener() {
    return new Promise((resolve) => {
      window.addEventListener('gamepadconnected', () => {
        if (!this.getConntrollerName()) {
          resolve(false)
        } else {
          console.log(`Controller connected: ${this.getConntrollerName()}`);
          resolve(true);
        }
      });
      window.addEventListener('gamepaddisconnected', () => {
        console.log(`Controller disconnected ${this.getConntrollerName()}`);
        resolve(false);
      });
    });
  }

  getConntrollerName() {
    try{
      return navigator.getGamepads()[this.player].id;
    } catch { return null; }
  }

  stickLeft() {
    let controller = navigator.getGamepads()[this.player];
    let leftStickRightAndLeft = (controller.axes[0] + 1) / 2;
    let leftSticktUpAndDown = (controller.axes[1] + 1) / 2;

    if (leftStickRightAndLeft > this.rightAndDownThreshold) {
      if (leftStickRightAndLeft > this.rightAndDownFinalThreshold) {
        return 'S1_Right_MAX';
      } else { return 'S1_Right'; }
    }

    if (leftStickRightAndLeft < this.leftAndUpThreshold) {
      if (leftStickRightAndLeft < this.leftAndUpFinalThreshold) {
        return 'S1_Left_MAX';
      } else { return 'S1_Left'; }
    }

    if (leftSticktUpAndDown > this.rightAndDownThreshold) {
      if (leftSticktUpAndDown > this.rightAndDownFinalThreshold) {
        return 'S1_Down_MAX';
      } else { return 'S1_Down'; }
    }

    if (leftSticktUpAndDown < this.leftAndUpThreshold) {
      if (leftSticktUpAndDown < this.leftAndUpFinalThreshold) {
        return 'S1_Up_MAX';
      } else { return 'S1_Up'; }
    }
  }

  stickRight() {
    let controller = navigator.getGamepads()[this.player];
    let rightStickRightAndLeft = (controller.axes[2] + 1) / 2;
    let rightStickUpAndDown = (controller.axes[3] + 1) / 2;

    if (rightStickRightAndLeft > this.rightAndDownThreshold) {
      if (rightStickRightAndLeft > this.rightAndDownFinalThreshold) {
        return 'S2_Right_MAX';
      } else { return 'S2_Right'; }
    }

    if (rightStickRightAndLeft < this.leftAndUpThreshold) {
      if (rightStickRightAndLeft > this.leftAndUpFinalThreshold) {
        return 'S2_Left_MAX';
      } else { return 'S2_Left'; }
    }

    if (rightStickUpAndDown > this.rightAndDownThreshold) {
      if (rightStickUpAndDown > this.rightAndDownFinalThreshold) {
        return 'S2_Down_MAX';
      } else { return 'S2_Down'; }
    }

    if (rightStickUpAndDown < this.leftAndUpThreshold) {
      if (rightStickUpAndDown < this.leftAndUpFinalThreshold) {
        return 'S2_Up_MAX';
      } else { return 'S2_Up'; }
    }
  }

  button() {
    let controller = navigator.getGamepads()[this.player];
    for (var i = 0; i < controller.buttons.length; i++) {
      if (controller.buttons[i].value) return this.buttonMap[i];
    }
  }

  vibration(durationTime) {
    navigator.getGamepads()[0].vibrationActuator.playEffect('dual-rumble', {
      startDelay: 0,
      duration: durationTime,
      weakMagnitude: 0.5,
      strongMagnitude: 0.5,
    });
  }

}
