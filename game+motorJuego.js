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
let score=6
let isBallCounted = false;


// function ballObstacleColission(){
    
// }

// Todo lo que hay por aqui encima, son aquellas cosas que NO ocurren durante el juego o
// se calculan fuera de este

class Game {

    constructor(){
    //propiedades que va a tener el juego
    // this.ball= new Ball()
    this.balls=[new Ball()]
    this.frames=0
    }


    //aqui los metodos del juego
ballWallCollision=(ball)=>{ //sistema de puntos subida
    if(ball.ballX>=475){  //475 es la medida de colision PARED DERECHA
        ball.isBallMovingRight=false


       }else if(ball.ballY>=465){//Choque pared abajo, a eliminar 465
        score-=2
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


     paddlePositionUpdates=()=>{
        paddleNode.style.left = `${paddleX}px`
        paddleNode.style.top = `${paddleY}px`
    }
    
    ballPaddleColission=(ball)=>{
        if ((ball.ballY + ball.ballHeight > paddleY) &&
            (ball.ballX + paddleX) &&
            (ball.ballX + ball.ballWidth < paddleX + paddleWidth)) {
      
                this.balls.splice(this.balls.indexOf(ball),1)
                ball.ballNode.remove()
        //   this.ball.isBallVisible = false;
        //   this.ball.ballNode.remove(); 
        
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

        

        //1.Cambios en los elementos
        // this.ballWallCollision()
        // this.ballPaddleColission()
        // if(!this.ball.isBallVisible){
        //     this.ball.node.style.display="none"
        // }
        // ballObstacleColission()
        // this.ball.ballMovement()
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

