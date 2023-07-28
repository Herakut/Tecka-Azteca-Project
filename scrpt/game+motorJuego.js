//Nodes
const gameBoxNode=document.querySelector("#game-box")
const paddleNode=document.querySelector("#paddle")
const scoreDisplay = document.querySelector("#score")
const timerNode=document.querySelector("#timer")
const gameoverNode=document.querySelector("#gameover-screen")

//Game+motor

class Game {  

    constructor(){
    //Basic state of:
    //timer
    this.seconds = 30;
    this.countdownInterval=null;
    this.startCountdown()

    //ball
    this.balls=[]
    this.frames=0

    //paddle
    this.newPaddle= new Paddle()   

    //game status
    this.isGameOn = true

    //score
    this.score=6    
    }

    //Functions of the fame
    //Ball
    ballApear = () => {
    
      if (this.balls.length === 0 || this.frames % 180 === 0) {   
          let newBallLeft = new Ball(150,10,2,false,true)
          this.balls.push( newBallLeft )} 

          else if(this.frames % 240 === 0){
            let newBallRight= new Ball(400,10,3,true,true)         
            this.balls.push( newBallRight)            

          }else if(this.frames % 270 === 0){
            let newBallRight= new Ball(150,10,4,true,true)         
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
               
        }else if(this.frames % 300 === 0){
          let newBallLeft = new Ball(400,10,4,false,true)
          this.balls.push( newBallLeft )

        }
    } 

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
    ballPaddleColission=(ball)=>{
      if ((ball.ballY + ball.ballHeight > this.newPaddle.paddleY) &&
          (ball.ballX > this.newPaddle.paddleX) &&
          (ball.ballX + ball.ballWidth < this.newPaddle.paddleX + this.newPaddle.paddleWidth)) {
    
              this.balls.splice(this.balls.indexOf(ball),1)
              ball.ballNode.remove()
      
      
      this.score++
        this.updateScoreDisplay();
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
   

     //Score   
    updateScoreDisplay=()=>{
        scoreDisplay.innerText=this.score}
    

    //Game
    gameOver =()=>{
        if(this.score<=0 || this.seconds===0){         
        this.isGameOn=false;       
        gameScreenNode.style.display="none"
        
        gameScreenNode.innerHTML=""

        gameoverNode.style.display="flex"}
    }

    //Motor
    gameLoop=()=>{
        

        this.frames++

        this.ballApear()

        this.balls.forEach(eachBall=>{
            eachBall.ballMovement()
            this.ballWallCollision(eachBall)
            this.ballPaddleColission(eachBall)

        })          

        this.newPaddle.paddlePositionUpdates() 
        this.updateScoreDisplay()

                if(this.isGameOn===true){
            requestAnimationFrame(this.gameLoop)
        }
        
         this.gameOver() 

      
      
    }













}







