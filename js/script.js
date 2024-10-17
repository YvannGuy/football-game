const gameContainer = document.getElementById("gameContainer");

class Player {

  constructor() {
    //values that will be used to style the DOM element
    this.width = 100;
    this.height = 80;
    this.positionX = 250;
    this.positionY = 710;
    //variable that will hold the div element
    this.domElement = null;
    //the speed in which the player moves left and right
    this.velocity = 15
    //calls the createDomElement Function
    this.createDomElement();
  }

  createDomElement() {
    this.domElement = document.createElement("img"); // Change to img element
        this.domElement.src = '/images/player.png'; // Path to your player image
    this.domElement.style.width = this.width + "px";
    this.domElement.style.height = this.height + "px";
    this.domElement.style.position = "absolute";
    this.domElement.style.top = this.positionY + "px";
    this.domElement.style.left = this.positionX + "px";
    this.domElement.style.objectFit = "contain"; // Ensure 

    gameContainer.appendChild(this.domElement);
  }
  
// function to move left
  moveLeft(){
    // checks if the player is not out of bounds, or positionX is greater than 0 (left 0)
    if(this.positionX > 0){
        this.positionX = this.positionX - this.velocity
        this.domElement.style.left = this.positionX + "px"
    }
  }

  moveRight(){
    if(this.positionX < 600){

        this.positionX = this.positionX + this.velocity
        this.domElement.style.left = this.positionX + "px"
    }
    
  }
}


const player = new Player();


document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowLeft"){
        player.moveLeft()
        console.log(player.positionX)
    }
    if(event.key === "ArrowRight"){
        player.moveRight()
        console.log(player.positionX)
    }
    if(event.key === " "){
        const newBall = new Ball(player.positionX, player.positionY);
        
    }
})
