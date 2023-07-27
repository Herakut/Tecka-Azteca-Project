class Paddle{
    constructor(){
        //elemento dom
        this.paddleNode=document.createElement("img")
        this.paddleNode.src="./imagenes/obstaculo.png"
        gameBoxNode.append(this.paddleNode)
       

        //mpropiedades paddle
        this.paddleX=180;    //left
        this.paddleY=440;   //top
        
        this.paddleWidth= 170
        this.paddleHeight= 30



        //tamaño y posicion de paddle
        this.paddleNode.style.left = `${this.paddleX}px`
        this.paddleNode.style.top = `${this.paddleY}px`

        this.paddleNode.style.width=`${this.paddleWidth}px`
        this.paddleNode.style.height=`${this.paddleHeight}px` 

        this.paddleNode.style.position="absolute"


    }

    //metodos
    paddlePositionUpdates=()=>{
        this.paddleNode.style.left = `${this.paddleX}px`
        this.paddleNode.style.top = `${this.paddleY}px`
    }







    // paddleMovement =(event)=>{
    
    // }

}