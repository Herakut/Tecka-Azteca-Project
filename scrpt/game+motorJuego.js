//NODOS
// const ballNode=document.querySelector("#ball")
const gameBoxNode=document.querySelector("#game-box")
const paddleNode=document.querySelector("#paddle")
const obstacleNode=document.querySelector("#obstacle")
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
    this.balls=[new Ball()]
    this.frames=0

    //item paddle
    this.newPaddle= new Paddle()

    //item obstaculo

    //item score

    //timer
    this.timer=60;

    //gameover
    this.isGameOn = true

    //score
    this.score=2

   

    }

    

    //aqui los metodos del juego
    ballWallCollision=(ball)=>{ //sistema de puntos subida
    if(ball.ballX>=475){  //475 es la medida de colision PARED DERECHA
        ball.isBallMovingRight=false


       }else if(ball.ballY>=465){//Choque pared abajo, a eliminar 465
        this.score-=2
            this.balls.splice(this.balls.indexOf(ball),1)
            ball.ballNode.remove()
            // ball.isBallMovingDown=false-----No hace falta debido a que desaparece
            //establecer puntos 
            //desaparecer pero no cambiar game
            // this.ball.isBallVisible=false;
        }else if(ball.ballX<0){//choque pared izquierda
            ball.isBallMovingRight =true  
        
        }else if(ball.ballY<0){//choque pared arriba
            ball.isBallMovingDown=true 
        }
        
}

    //  paddlePositionUpdates=()=>{
    //     paddleNode.style.left = `${paddleX}px`
    //     paddleNode.style.top = `${paddleY}px`
    // }
    
    ballPaddleColission=(ball)=>{
        if ((ball.ballY + ball.ballHeight > this.newPaddle.paddleY) &&
            (ball.ballX + this.newPaddle.paddleX) &&
            (ball.ballX + ball.ballWidth < this.newPaddle.paddleX + this.newPaddle.paddleWidth)) {
      
                this.balls.splice(this.balls.indexOf(ball),1)
                ball.ballNode.remove()
        //   this.ball.isBallVisible = false;
        //   this.ball.ballNode.remove(); 
        
        this.score++
          this.updateScoreDisplay();
        } else {
          isBallCounted = false; 
        }
    }


     
    //Actualizador Marcador 
    updateScoreDisplay=()=>{
        scoreDisplay.innerText=this.score}
    
    gameOver =()=>{
        if(this.score===0){         
        this.isGameOn=false;       
        gameScreenNode.style.display="none"
        gameoverNode.style.display="flex"}
    }
           
    timerConter=()=>{
        if(this.timer>0){
            this.timer--
            timerNode.innerText=timer
            setTimeout(this.timerConter,1000)
        }else{
            isGameOn = false;
        }  
    }



    // peedCountDown = () => {
    //     if (this.speedCounter > 0) {
    //       this.speedCounter--;
    //       speedCounterNode.innerHTML = `<h2>TIEMPO DE VELOCIDAD RESTANTE ${this.speedCounter} SEGUNDOS</h2>`;
    //       setTimeout(this.speedCountDown, 1000);
    //     } else {
    //       this.moreSpeed = false;
    //       speedCounterNode.innerHTML = "";
    //     }
    //   };





    //Creacion bola nueva
      newBall=()=>{
        setInterval((bolaNueva), 3000)
        
    }



    gameLoop=()=>{

        this.frames++
        //queremos buscar los segundos, por lo que multiplicamos 60frames*los segundos=180
        if(this.frames%180===0){
            this.balls.push(new Ball())
        }

        this.balls.forEach(eachBall=>{
            eachBall.ballMovement()
            this.ballWallCollision(eachBall)
            this.ballPaddleColission(eachBall)

        })   

        this.newPaddle.paddlePositionUpdates() //--iNVOCO EL METODO con el nombre dado al crearlo
        
        
        this.updateScoreDisplay()

        //Efectos del juego:
        if(this.isGameOn===true){

        }
        
         this.gameOver()

      requestAnimationFrame(this.gameLoop)
      //-->La recursion que inicial el juego y el rate por el cual ira el movimiento  
    }













}






// window.addEventListener("keydown", (event)=>{
    


//     if(event.key === "ArrowRight"){
//         this.newPaddle.paddleX+=50//------------------->fluidez del movimiento de la paleta, corregir
//     }else if(event.key==="ArrowLeft"){
//         this.newPaddle.paddleX-=50
//     }
   
//     //gracias a esto de aqui arriba, aumenta el valor del posicionamiento de la paleta
//     //La paleta no se mueve ya que deberia estar dentro del rango de la funcion que hace la recursion
//     //de esta manera, el valor junto a su posicionamiento, de la paleta de actualiza
// })

