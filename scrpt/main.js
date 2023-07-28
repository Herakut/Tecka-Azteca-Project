//Nodes
const startbuttonNode=document.querySelector("#start-button")
const restartbuttonNode=document.querySelector("#final-button")

const splashScreenNode=document.querySelector("#splash-screen")
const gameScreenNode=document.querySelector("#game-screen")
const gameoverScreenNode=document.querySelector("#gameover-screen")  

let gameObj=null;

function startGame(){

splashScreenNode.style.display="none"
gameoverScreenNode.style.display="none"

gameScreenNode.style.display="block"

gameObj = new Game ();
gameObj.gameLoop()
console.log(gameObj)
}


// //Undone---->trouble to load the game screen
// function restartGame(){
//     gameoverScreenNode.style.display="none"
//     gameScreenNode.style.display="block"
    
    
//     console.log("holñaaa")

//     gameObj = new Game();
//     gameObj.gameLoop()
 
//     console.log(gameObj)
    
// }
// restartbuttonNode.addEventListener("click",restartGame)

//EVENT LISTENER
startbuttonNode.addEventListener("click",startGame)


//Movement through keyboard of paddle
window.addEventListener("keydown", (event)=>{
    if(event.key === "ArrowRight"){
      gameObj.newPaddle.paddleX+=50
    }else if(event.key==="ArrowLeft"){
        gameObj.newPaddle.paddleX-=50
    } 
})


