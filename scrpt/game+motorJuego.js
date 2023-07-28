//NODOS
// const ballNode=document.querySelector("#ball")
const gameBoxNode=document.querySelector("#game-box")
const paddleNode=document.querySelector("#paddle")
// const obstacleNode=document.querySelector("#obstacle")
const scoreDisplay = document.querySelector("#score")//crea un span para facilitar el proceso
const timerNode=document.querySelector("#timer")
const gameoverNode=document.querySelector("#gameover-screen")



// const conten=score.innerText
// console.log(conten)

//VARIABLES DE PROPIEDADES DE ITEMS

// let paddleX=50;
// let paddleY=440;
// let paddleWidth= 70
// let paddleHeight= 30

let obstacleX=50;
let obstacleY=440;
let obstacleWidth= 70
let obstacleHeight= 30







/*********************score***************************/

let isBallCounted = false;


// function ballObstacleColission(){
    
// }

// Todo lo que hay por aqui encima, son aquellas cosas que NO ocurren durante el juego o
// se calculan fuera de este

class Game {

    
    




    constructor(){
    //items que va a tener el juego

    // item ball
    this.balls=[]
    this.frames=0

    // item ball
    // this.balls2=[new Ball2()]
    // this.frames2=0
    //item paddle
    this.newPaddle= new Paddle()

    //item obstaculo

    

    //timer
    this.seconds = 60;
    this.countdownInterval=null;

    //gameover
    this.isGameOn = true

    //score
    this.score=6

    //timer
    this.startCountdown()
   
    }


    ballApear = () => {
        // obstaculeSpawning
        // cuando queremos que apareazan ostaculos?
        // - Al inicio del juego. this.obstaculosArr.length === 0
        // - cuando hayan pasado 2 segundos.  this.frames % 120 === 0
        if (this.balls.length === 0 || this.frames % 180 === 0) {   

    
          let newBallLeft = new Ball(150,10,2,false,true)
          this.balls.push( newBallLeft )} 

          else if(this.frames % 240 === 0){
            let newBallRight= new Ball(400,10,3,true,true)         
            this.balls.push( newBallRight)            

          }else if(this.frames % 270 === 0){
            let newBallRight= new Ball(150,10,3,true,true)         
            this.balls.push( newBallRight)            

          }else if(this.frames % 300 === 0){
            let newBallLeft = new Ball(150,10,1,false,true)
            this.balls.push( newBallLeft )

          }else if(this.frames % 300 === 0){
            let newBallLeft = new Ball(50,10,2,false,true)
            this.balls.push( newBallLeft )

          }else if(this.frames % 440 === 0){
            let newBallRight= new Ball(400,10,5,true,true)         
            this.balls.push( newBallRight)
        
          
    
      }
    } 

    updateTimer=()=> {
        timerNode.innerText = this.seconds;
        }


    startCountdown=()=> {
    this.countdownInterval = setInterval(() => {
    this.seconds--;
    this.updateTimer();

    if (this.seconds===0) {
      clearInterval(this.countdownInterval);
            
    }
    }, 1000); 

    }
   




//Colisiones ball y ball2 contra muro

    ballWallCollision=(ball)=>{ 
    if(ball.ballX>=475){  
        ball.isBallMovingRight=false


       }else if(ball.ballY>=475){  //sueñp
        this.score-=2
            this.balls.splice(this.balls.indexOf(ball),1)
            ball.ballNode.remove()
            
        }else if(ball.ballX<0){
            ball.isBallMovingRight =true  
        
        }else if(ball.ballY<0){
            ball.isBallMovingDown=true 
        }
        
}   
    // ballWallCollision2=(ball2)=>{
    // if(ball2.ballX>=475){  
    //     ball2.isBallMovingRight=false


    //    }else if(ball2.ballY>=465){//Choque pared abajo,
    //     this.score-=2
    //         this.balls2.splice(this.balls2.indexOf(ball2),1)
    //         ball2.ballNode.remove()
         
    //     }else if(ball2.ballX<0){//choque pared izquierda
    //         ball2.isBallMovingRight =true  
        
    //     }else if(ball2.ballY<0){//choque pared arriba
    //         ball2.isBallMovingDown=true 
    //     }
        
    //     }

    //Colisiones ball y ball2 contra paddle

    ballPaddleColission=(ball)=>{
    if ((ball.ballY + ball.ballHeight > this.newPaddle.paddleY) &&
        (ball.ballX > this.newPaddle.paddleX) &&
        (ball.ballX + ball.ballWidth < this.newPaddle.paddleX + this.newPaddle.paddleWidth)) {
  
            this.balls.splice(this.balls.indexOf(ball),1)
            ball.ballNode.remove()
    
    
    this.score++
      this.updateScoreDisplay();
    }  //else {
    //   isBallCounted = false; 
    // }

    }




    // this.paddleX=50;    //left
    // this.paddleY=440;   //top
    
    // this.paddleWidth= 170
    // this.paddleHeight= 30

    // paddleWallCollision=(paddle)=>{
    //     if(paddle.paddleY+paddleHeight>)
    // }




//     ballPaddleColission2=(ball2)=>{
//         if ((ball2.ballY + ball2.ballHeight > this.newPaddle.paddleY) &&
//             (ball2.ballX + this.newPaddle.paddleX) &&
//             (ball2.ballX + ball2.ballWidth < this.newPaddle.paddleX + this.newPaddle.paddleWidth)) {
      
//                 this.balls2.splice(this.balls2.indexOf(ball2),1)
//                 ball2.ballNode.remove()
  
//         this.score++
//           this.updateScoreDisplay();
//         } else {
//           isBallCounted = false; 
//         }
// }



    
     
    //Actualizador Marcador 
   
    updateScoreDisplay=()=>{
        scoreDisplay.innerText=this.score}
    
    gameOver =()=>{
        if(this.score<=0 || this.seconds===0){         
        this.isGameOn=false;       
        gameScreenNode.style.display="none"
        
        gameScreenNode.innerHTML=""

        gameoverNode.style.display="flex"}
    }
    // gameOver =()=>{
    //     if(this.score===0 || this.seconds===0){         
    //     this.isGameOn=false;       
    //     gameScreenNode.style.display="none"
        
    //     gameScreenNode.innerHTML=""

    //     gameoverNode.style.display="flex"}
    // }
           
 

    // //Creacion bola nueva
    //   newBall=()=>{
    //     setInterval((bolaNueva), 3000)
        
    // }

    

    gameLoop=()=>{
        

        this.frames++
        //     if(this.frames%240===0){
        //     this.balls.push(new Ball())
        // }

        // this.frames2++       
        // if(this.frames2%180===0){
        //     this.balls2.push(new Ball2())
        // }

        this.ballApear()

        this.balls.forEach(eachBall=>{
            eachBall.ballMovement()
            this.ballWallCollision(eachBall)
            this.ballPaddleColission(eachBall)

        }) 

        // this.balls2.forEach(eachBall2=>{
        //     eachBall2.ballMovement()
        //     this.ballWallCollision2(eachBall2)
        //     this.ballPaddleColission2(eachBall2)

        // })   

        this.newPaddle.paddlePositionUpdates() //--iNVOCO EL METODO con el nombre dado al crearlo
        this.updateScoreDisplay()

        //Efectos del juego:
        if(this.isGameOn===true){
            requestAnimationFrame(this.gameLoop)
        }
        
         this.gameOver()

    

      
      
    }













}







