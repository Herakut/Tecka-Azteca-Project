console.log("Probando")

//GLOBAL VARIABLES
//-->Selecciones
    //Botones. Start y Re-Star(start-final)
const startbuttonNode=document.querySelector("#start-button")
const finalbuttonNode=document.querySelector("#final-button")

    //Pantallas
const splashScreenNode=document.querySelector("#splash-screen")
const gameScreenNode=document.querySelector("#game-screen")
const gameoverScreenNode=document.querySelector("#gameover-screen")


    //Items


/*******/


let gameObj=null;



//STATE MANAGEMENT FUNCTIONS
function startGame(){
  //lo que va a ocurrir con cada inicio de juego
splashScreenNode.style.display="none"//ocultar pantalla
gameoverScreenNode.style.display="none"//ocultar pantalla

gameScreenNode.style.display="block"//mostrar pantalla

gameObj = new Game ();
gameObj.gameLoop()
console.log(gameObj)
}

//EVENT LISTENER
startbuttonNode.addEventListener("click",startGame)





//Movimiento del chak mul




window.addEventListener("keydown", (event)=>{
    if(event.key === "ArrowRight"){
      gameObj.newPaddle.paddleX+=50//------------------->fluidez del movimiento de la paleta, corregir
    }else if(event.key==="ArrowLeft"){
        gameObj.newPaddle.paddleX-=50
    }
   
    //gracias a esto de aqui arriba, aumenta el valor del posicionamiento de la paleta
    //La paleta no se mueve ya que deberia estar dentro del rango de la funcion que hace la recursion
    //de esta manera, el valor junto a su posicionamiento, de la paleta de actualiza
})


