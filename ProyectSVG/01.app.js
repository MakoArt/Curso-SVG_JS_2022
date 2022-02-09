import {listaProyectiles, nave} from './02.protagonista.js' 
import { listaEnemigos } from './05.enemigos.js'
import {puntuacion} from './06.puntuaciones.js'


const html=document.querySelector('html') 

let calculoColision; 
let redondeoColision; 
let bordeEnemigoX; 
let bordeProyectilX; 
let bordeEnemigoY; 
let bordeProyectilY; 
export let puntuacionMarcador=0;


html.style.backgroundColor='black'





function animate(){
    window.requestAnimationFrame(animate)
  puntuacion.dibuja()
  nave.dibuja()
  nave.mueve()
  nave.recargaProyectil()

  listaEnemigos.forEach((enemigo,index)=>{
    bordeEnemigoY=enemigo.posY + enemigo.radio 
    bordeEnemigoX=enemigo.posX + enemigo.radio
    bordeProyectilY=listaProyectiles[0].posY + listaProyectiles[0].radio
    bordeProyectilX=listaProyectiles[0].posX + listaProyectiles[0].radio

    calculoColision=Math.sqrt(Math.pow(bordeEnemigoX-bordeProyectilX,2)+Math.pow(bordeEnemigoY-bordeProyectilY,2))
    redondeoColision=Math.round(calculoColision)
     
    enemigo.dibuja()
    enemigo.mover()



    if(redondeoColision<12){
      enemigo.posY=-100
      listaProyectiles[0].posY=nave.y 
      puntuacionMarcador+=1
    
    } 
    if(enemigo.posY>nave.y + 100){
      enemigo.posY+=0
    }

     
 

  })
}
animate()