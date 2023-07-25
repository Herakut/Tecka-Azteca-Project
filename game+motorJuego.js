//NODOS
// const ballNode=document.querySelector("#ball")
const gameBoxNode=document.querySelector("#game-box")
const paddleNode=document.querySelector("#paddle")
const obstacleNode=document.querySelector("#obstacle")
const scoreDisplay = document.querySelector("#score")//crea un span para facilitar el proceso
// const conten=score.innerText
// console.log(conten)

//VARIABLES DE PROPIEDADES DE ITEMS

let paddleX=50;
let paddleY=440;
let paddleWidth= 70
let paddleHeight= 30

let obstacleX=50;
let obstacleY=440;
let obstacleWidth= 70
let obstacleHeight= 30





isGameOn = true

/*********************score***************************/
let score=0
let isBallCounted = false;

//FUNCIONES RECOGIDAS
// function ballMovement(){

//     //Movimiento ball
//     if(isBallMovingRight===true){
//         ballX+=ballSpeed
//     }else{
//         ballX-=ballSpeed
//     }

//     // ballY++ 
//     if(isBallMovingDown===true){
//         ballY+=ballSpeed
//     }else{
//         ballY-=ballSpeed
//     }

//     ballY++

    

// }



// function ballPositionUpdate(){
//     ballNode.style.left=`${ballX}px`
//     ballNode.style.top=`${ballY}px`
// }

// function ballPaddleColission(){
   
// if ((this.ball.ballY + this.ball.ballHeight > paddleY) && (this.ball.ballX > paddleX)
//  && (this.ball.ballX + this.ball.ballWidth < paddleX + paddleWidth)) { //condicion aqui, parametro efecto abajo
//     this.ball.isBallMovingDown =false
//     this.ball.isBallVisible=false;

//    score++
//    updateScoreDisplay();
//    if(this.ball.isBallVisible===false){
    
//     // isBallCounted=true-------------->Trabajar luego 
//     }
//   } else {
//     isBallCounted = false; 
//   }
// }



// function ballObstacleColission(){
    
// }

// Todo lo que hay por aqui encima, son aquellas cosas que NO ocurren durante el juego o
// se calculan fuera de este

class Game {

    constructor(){
    //propiedades que va a tener el juego
    this.ball= new Ball()


    }
    //aqui los metodos del juego
ballWallCollision=()=>{ //sistema de puntos subida
    if(this.ball.ballX>=475){  //475 es la medida de colision PARED DERECHA
        this.ball.isBallMovingRight=false

       }else if(this.ball.ballY>=465){//Choque pared abajo, a eliminar 465
        this.ball.isBallMovingDown=false
        //establecer puntos 
        //desaparecer pero no cambiar game
        this.ball.isBallVisible=false;
        }else if(this.ball.ballX<0){//choque pared izquierda
            this.ball.isBallMovingRight =true  
        
        }else if(this.ball.ballY<0){//choque pared arriba
            this.ball.isBallMovingDown=true 
        }
        
}


     paddlePositionUpdates=()=>{
        paddleNode.style.left = `${paddleX}px`
        paddleNode.style.top = `${paddleY}px`
    }
    
    ballPaddleColission=()=>{
        if ((this.ball.ballY + this.ball.ballHeight > paddleY) &&
            (this.ball.ballX + paddleX) &&
            (this.ball.ballX + this.ball.ballWidth < paddleX + paddleWidth)) {
      
          this.ball.isBallMovingDown = false;
          this.ball.isBallVisible = false;
          this.ball.ballNode.remove(); 
          score++
          this.updateScoreDisplay();
        } else {
          isBallCounted = false; 
        }
      }
     
    updateScoreDisplay=()=>{
    scoreDisplay.innerText=score
    
    //EL JUEGO DEBE TERMINAR
    if(score ===0){
        isGameOn=false
    }
    }
    
    newBall=()=>{
        setInterval((bolaNueva), 3000)
    }



    gameLoop=()=>{

        //1.Cambios en los elementos
        this.ballWallCollision()
        this.ballPaddleColission()
        if(!this.ball.isBallVisible){
            // this.ball.node.style.display="none"
        }
        // ballObstacleColission()
        this.ball.ballMovement()
       //2.Actualizaciones
        this.paddlePositionUpdates()        
        this.updateScoreDisplay()

        //Efectos del juego:
        if(isGameOn===true){

        }

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

