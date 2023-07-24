const ballNode=document.querySelector("#ball")
let ballX=10;


class Game {

    constructor(){
        //propiedades que va a tener el juego


    }
    //aqui los metodos del juego


    
    gameLoop=()=>{

        //1.Cambios en los elementos
        ballX++;
       //2.Actualizaciones
        console.log("HOLAAAA")
        ballNode.style.left=`${ballX}px`
      requestAnimationFrame(this.gameLoop)
      //-->La recursion que inicial el juego y el rate por el cual ira el movimiento  
    }













}