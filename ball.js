class Ball{
 constructor(){
    this.ballX=10;
    this.ballY=10;

    this.ballSpeed=1
    this.isBallMovingRight= true;
    this.isBallMovingDown=true;
    this.ballWidth= 30
    this.ballHeight= 30
    this.isBallVisible=true;
    this.ballNode=document.querySelector("#ball")
 }
        //Funciones

        ballMovement=()=>{

    //Movimiento ball
    if(this.isBallMovingRight===true){
        this.ballX+=this.ballSpeed
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






// const ballNode =document.querySelector("ball")
// ballNode.style.left= "237px"; //posicion inicial
