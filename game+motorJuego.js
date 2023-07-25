//NODOS
const ballNode=document.querySelector("#ball")
const gameBoxNode=document.querySelector("#game-box")
const paddleNode=document.querySelector("#paddle")
const obstacleNode=document.querySelector("#obstacle")
const scoreDisplay = document.querySelector("#game-box score")

//VARIABLES DE PROPIEDADES DE ITEMS
let ballX=10;
let ballY=10;

let ballSpeed=6
let isBallMovingRight= true;
let isBallMovingDown=true;

let isBallVisible=true;

let paddleX=50;
let paddleY=440;
let paddleWidth= 70
let paddleHeight= 30

let obstacleX=50;
let obstacleY=440;
let obstacleWidth= 70
let obstacleHeight= 30



let ballWidth= 30
let ballHeight= 30

/*********************score***************************/
let score=0
let isBallCounted = false;

//FUNCIONES RECOGIDAS
function ballMovement(){

    //Movimiento ball
    if(isBallMovingRight===true){
        ballX+=ballSpeed
    }else{
        ballX-=ballSpeed
    }

    // ballY++ 
    if(isBallMovingDown===true){
        ballY+=ballSpeed
    }else{
        ballY-=ballSpeed
    }

    ballY++

    

}

function ballWallCollision(){
    if(ballX>=475){  //475 es la medida de colision PARED DERECHA
            isBallMovingRight=false

       }else if(ballY>=465){//Choque pared abajo, a eliminar 465
            isBallMovingDown=false
       
        }else if(ballX<0){//choque pared izquierda
            isBallMovingRight =true  
        
        }else if(ballY<0){//choque pared arriba
            isBallMovingDown=true 
        }
        
}

function ballPositionUpdate(){
    ballNode.style.left=`${ballX}px`
    ballNode.style.top=`${ballY}px`
}

function paddlePositionUpdates(){
    paddleNode.style.left = `${paddleX}px`
   paddleNode.style.top = `${paddleY}px`
}

function ballPaddleColission(){
    //console.log(ballWidth, paddleWidth)
if ((ballY + ballHeight > paddleY) && (ballX > paddleX) && (ballX + ballWidth < paddleX + paddleWidth)) {
   isBallMovingDown =false
   isBallVisible=false;
   if(isBallVisible===false){
    score++
    isBallCounted=true
    updateScoreDisplay(); 
    }
  } else {
    isBallCounted = false; 
  }
}


function updateScoreDisplay(){
score.innerText=`${score}`
}

// function ballObstacleColission(){
    
// }

// Todo lo que hay por aqui encima, son aquellas cosas que NO ocurren durante el juego o
// se calculan fuera de este

class Game {

    // constructor(){
    //     //propiedades que va a tener el juego


    // }
    // //aqui los metodos del juego


    
    gameLoop=()=>{

        //1.Cambios en los elementos
        ballWallCollision()
        ballPaddleColission()
        if(!isBallVisible){
            ballNode.style.display="none"
        }
        // ballObstacleColission()
        ballMovement()
       //2.Actualizaciones
        paddlePositionUpdates()
        ballPositionUpdate()

      requestAnimationFrame(this.gameLoop)
      //-->La recursion que inicial el juego y el rate por el cual ira el movimiento  
    }

    //Movimiento de la paleta gracias al teclado











}
//Movimiento del chak mul
window.addEventListener("keydown", (event)=>{
    


    if(event.key === "ArrowRight"){
        paddleX+=50//------------------->fluidez del movimiento de la paleta, corregir
    }else if(event.key==="ArrowLeft"){
        paddleX-=50
    }
    console.log(paddleX)
    //gracias a esto de aqui arriba, aumenta el valor del posicionamiento de la paleta
    //La paleta no se mueve ya que deberia estar dentro del rango de la funcion que hace la recursion
    //de esta manera, el valor junto a su posicionamiento, de la paleta de actualiza
})

