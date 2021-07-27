class Gravity {

  // © 2021 by Voxny404
  //  _   __                    ____ ___  ____
  // | | / /__ __ __ ___  __ __/ / // _ \/ / /
  // | |/ / _ \\ \ // _ \/ // /_  _/ // /_  _/
  // |___/\___/_\_\/_//_/\_, / /_/ \___/ /_/
  //                    /___/
  // https://voxny404.github.io/portfolio
  
  constructor() {
    this.currentSpeed = null
  }

  bouncy(object) {

    if(object.y < window.innerHeight - 25) {
      object.y = object.y + object.gravitySpeed ;

      if(object.y + 15 >= window.innerHeight - 15) object.gravitySpeed = this.currentSpeed - object.drag;
      if (this.currentSpeed > object.gravitySpeed && object.y + object.jumbHeight < window.innerHeight - object.jumbHeight ) {

        object.gravitySpeed = this.currentSpeed + object.drag;
        object.jumbHeight = object.jumbHeight - (object.jumbHeight /5);
      }
    }
  }

}
