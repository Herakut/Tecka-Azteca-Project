class Ball{
 constructor(positionX, positionY, speed, functIsBallMovingRight, isBallMovingDown){
  

    this.ballX=positionX;//CAMBIAR
    this.ballY=positionY;//CAMBIAR

    this.ballSpeed=speed
    this.isBallMovingRight= functIsBallMovingRight; //cambiar
    this.isBallMovingDown=isBallMovingDown;
    this.ballWidth= 30
    this.ballHeight= 30



   
    this.ballNode=document.createElement("img")
    this.ballNode.src="imagenes/moneda.png"
    gameBoxNode.append(this.ballNode)

    
    this.ballNode.style.width=` ${this.ballWidth}px`
    this.ballNode.style.height=` ${this.ballHeight}px`

    this.ballNode.style.left=` ${this.ballX}px`
    this.ballNode.style.top=` ${this.ballY}px`

    this.ballNode.style.position="absolute"

 }
      
 
 
 
 //Funciones, funciones

    ballMovement=()=>{

        //Movimiento ball
        if(this.isBallMovingRight===true){
        this.ballX+=this.ballSpeed//CAMBIAR
         }else{
        this.ballX-=this.ballSpeed
        }

         
    

        // ballY++ 
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
// constructor(positionX, positionY, functIsBallMovingRight)
// const ball1 = new Ball(150,10,true,true)

// const ball2= new Ball(10,300,true,true);
// ball2.ballMovement=()=>{

//     //Movimiento ball
//     if(ball2.isBall2MovingRight===true){
//     ball2.ballX+=ball2.ballSpeed//CAMBIAR
//          }else{
//     ball2.ballX-=ball2.ballSpeed
//     }


//     // ballY++ 
//     if(ball2.isBallMovingDown===true){
//         ball2.ballY+=ball2.ballSpeed
//     }else{
//         ball2.ballY-=ball2.ballSpeed
//     }

//     ball2.ballY++

//     ball2.ballPositionUpdate()

//     }

//     ballPositionUpdate=()=>{
//         this.ballNode.style.left=`${this.ballX}px`
//         this.ballNode.style.top=`${this.ballY}px`
//     }





// const ballNode =document.querySelector("ball")
// ballNode.style.left= "237px"; //posicion inicial
