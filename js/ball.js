const ballContainer = document.getElementById("ball");

class Ball {
  constructor(initialPositionX, initialPositionY) {
    //values that will be used to style the DOM element
    this.width = 50;
    this.height = 50;
    this.positionX = initialPositionX;
    this.positionY = initialPositionY;
    //variable that will hold the div element
    this.domElement = null;
    //the speed in which the player moves left and right
    this.velocity = 15;
    //calls the createDomElement Function
    this.createDomElement();
    this.startMovement();
  }
  createDomElement() {
    // step1: create the element
    this.domElement = document.createElement("div");

    // step2: add content or modify (ex. innerHTML...)
    this.domElement.className = "ball";
    this.domElement.style.width = this.width + "px";
    this.domElement.style.height = this.height + "px";
    this.domElement.style.left = this.positionX + "px";
    this.domElement.style.top = this.positionY + "px";

    //step3: append to the dom: `parentElm.appendChild()`
    const board = document.getElementById("gameContainer");
    board.appendChild(this.domElement);
  }

  startMovement(){
    // every 100ms, invoke the method this.moveUp()

  }
  
  moveUp() {
    // checks if the player is not out of bounds, or positionX is greater than 0 (left 0)
    if (this.positionY > 0) {
      this.positionY = this.positionY - this.velocity;
      this.domElement.style.top = this.positionY + "px";
    }
  }
}
