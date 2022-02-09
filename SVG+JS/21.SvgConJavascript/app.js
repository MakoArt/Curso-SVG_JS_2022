class Circulo{
    constructor(circle,svg,posX,posY,radio,color,velocidad,direccionX,direccionY){
        this.circle=circle 
        this.svg=svg 
        this.posX=posX 
        this.posY=posY 
        this.radio=radio 
        this.color=color 
        this.velocidad=velocidad 
        this.direccionX=direccionX 
        this.direccionY=direccionY
        
   
    }
    dibuja(){
        this.svg.appendChild(this.circle)
        this.circle.setAttribute('cx',`${this.posX}`)
        this.circle.setAttribute('cy',`${this.posY}`)
        this.circle.setAttribute('r',`${this.radio}`)
        this.circle.setAttribute('fill',`${this.color}`)
    }
 
    mueve(){
      
        this.posX+=this.velocidad*this.direccionX 
        this.posY+=this.velocidad*this.direccionY
        
  
   
    }
    colisiones(){
        if(this.posX>300)
        this.direccionX=-1
        if(this.posX<20)
        this.direccionX=1
        if(this.posY>200)
        this.direccionY=-1
        if(this.posY<20)
        this.direccionY=1
    }
   
    
} 



let circulo=new Circulo(document.createElementNS('http://www.w3.org/2000/svg','circle'),
                        document.getElementById('svg'),
                        100,
                        100,
                        20,
                        'brown',
                        1,
                        1,
                        1
                        
                        )



            

function animate(){
    requestAnimationFrame(animate)
  
      circulo.dibuja()
      circulo.mueve()
      circulo.colisiones()
  

}
animate()