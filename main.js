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




//STATE MANAGEMENT FUNCTIONS
function startGame(){
  //lo que va a ocurrir con cada inicio de juego
splashScreenNode.style.display="none"//ocultar pantalla
gameoverScreenNode.style.display="none"//ocultar pantalla

gameScreenNode.style.display="flex"//mostrar pantalla

let gameObj = new Game ();
gameObj.gameLoop()
}

//EVENT LISTENER
startbuttonNode.addEventListener("click",startGame)
