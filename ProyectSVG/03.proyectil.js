export default class Proyectil{
    
    constructor(circle,svg,posX,posY,radio,color,velocidad,disparando){
        this.circle=circle
        this.svg=svg 
        this.posX=posX 
        this.posY=posY
        this.radio=radio
        this.color=color 
        this.velocidad=velocidad 
        this.disparando=disparando
    }
    dibuja(){
       
        this.circle.setAttribute('cx',`${this.posX}`) 
        this.circle.setAttribute('cy',`${this.posY}`)
        this.circle.setAttribute('r',`${this.radio}`)
        this.circle.setAttribute('fill',`${this.color}`) 
        this.svg.appendChild(this.circle)
    
    }
    mover(){
        this.posY-=this.velocidad
    }
   
    
}


