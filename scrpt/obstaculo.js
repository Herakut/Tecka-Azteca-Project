class Obstacle {
constructor(){
    

this.node=document.createElement("img")
this.node.src="./imagenes/obstaculo.png"
gameBoxNode.append(this.node)

//propiedades

// this.x1=this.x1
// this.x2=this.x1+150

// this.y1=this.y1
// this.y2=this,y1+30

this.x

this.width= (this.x1=this.x1) + (this.x2=this.x1+150)
this.heigth= (this.y1=this.y1) + (this.y2=this,y1+30)



//tamaño y posicion
this.node.style.width = `${this.width}px`
this.node.style.heigth = `${this.heigth}px`
this.node.style.position= "absolute"

this.node.style.top=`${this.heigth}px`
// top: 440px;
// left: 50px;
// }

}


}