class Paddle{
    constructor(){
        //Node
        this.paddleNode=document.createElement("img")
        this.paddleNode.src="./imagenes/obstaculo.png"
        gameBoxNode.append(this.paddleNode)
       

        //Properties of paddle
        this.paddleX=180;    //left
        this.paddleY=440;   //top
        
        this.paddleWidth= 100
        this.paddleHeight= 30

        //Size & position of paddle
        this.paddleNode.style.left = `${this.paddleX}px`
        this.paddleNode.style.top = `${this.paddleY}px`

        this.paddleNode.style.width=`${this.paddleWidth}px`
        this.paddleNode.style.height=`${this.paddleHeight}px` 

        this.paddleNode.style.position="absolute"


    }

    //Functions
    paddlePositionUpdates=()=>{
        this.paddleNode.style.left = `${this.paddleX}px`
        this.paddleNode.style.top = `${this.paddleY}px`
    }  

}