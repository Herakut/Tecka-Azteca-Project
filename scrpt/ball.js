class Ball{

    constructor(positionX, positionY, speed, functIsBallMovingRight, isBallMovingDown){
  
    //Paddle properties 
    this.ballX=positionX;
    this.ballY=positionY;

    this.ballSpeed=speed
    this.isBallMovingRight= functIsBallMovingRight; 
    this.isBallMovingDown=isBallMovingDown;

    this.ballWidth= 30
    this.ballHeight= 30


    //Node   
    this.ballNode=document.createElement("img")
    this.ballNode.src="imagenes/moneda.png"
    gameBoxNode.append(this.ballNode)



    //Update
    this.ballNode.style.width=` ${this.ballWidth}px`
    this.ballNode.style.height=` ${this.ballHeight}px`

    this.ballNode.style.left=` ${this.ballX}px`
    this.ballNode.style.top=` ${this.ballY}px`

    this.ballNode.style.position="absolute"

 }
      
 
 
 
 //Functions ball

    ballMovement=()=>{
        if(this.isBallMovingRight===true){
        this.ballX+=this.ballSpeed
         }else{
        this.ballX-=this.ballSpeed
        }   
    
        if(this.isBallMovingDown===true){
        this.ballY+=this.ballSpeed
        }else{
        this.ballY-=this.ballSpeed
        }

        this.ballY++

        this.ballPositionUpdate()

        }

    ballPositionUpdate=()=>{
            this.ballNode.style.left=`${this.ballX}px`
            this.ballNode.style.top=`${this.ballY}px`
        }      

        


}

