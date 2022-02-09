import Proyectil from './03.proyectil.js' 


class Enemigo extends Proyectil{
      constructor(circle,svg,posX,posY,radio,color,velocidad){
      super(circle,svg,posX,posY,radio,color,velocidad)
}
mover(){
    this.posY+=this.velocidad
 }
}

export let listaEnemigos=[]



if(listaEnemigos.length<30)

setInterval(()=>{
   


     let posicionX=Math.round(Math.random()*500)
     let posicionY=Math.round(Math.random()*-100)
     let Red=Math.round(Math.random()*255)
     let Green=Math.round(Math.random()*255)
     let Blue=Math.round(Math.random()*255)
     let radio=Math.random()*(10-5)+5
     let velocidad=Math.random()*(3-1)+1
    if(listaEnemigos.length<30){
                                                                                        'rgb(100,230,54)'
    
       listaEnemigos.push(new Enemigo(document.createElementNS('http://www.w3.org/2000/svg','circle'),document.getElementById('svg'),posicionX,posicionY,radio,`rgb(${Red},${Green},${Blue})`,velocidad))

    }
    
},1000)
  
