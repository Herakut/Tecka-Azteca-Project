class Ball2{
    constructor(){
     
       this.ballY=10;
       this.ballX=300;
       
   
       this.ballSpeed=4
       this.isBallMovingRight= true;
       this.isBallMovingDown=true;
       this.ballWidth= 30
       this.ballHeight= 30
   
   
   
       // this.isBallVisible=true;
       // this.ballNode=document.querySelector("#ball")
       this.ballNode=document.createElement("img")
       this.ballNode.src="imagenes/moneda2.png"
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
           this.ballX-=this.ballSpeed
            }else{
           this.ballX+=this.ballSpeed
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
   