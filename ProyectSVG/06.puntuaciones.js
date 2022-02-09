import {puntuacionMarcador} from './01.app.js'

class Puntuaciones{
    constructor(puntuacion,body){
        this.puntuacion=document.querySelector('h1')
        this.body=document.querySelector('body')
    }
    dibuja(){
        this.puntuacion.textContent=`puntuacion:${puntuacionMarcador}` 
        this.puntuacion.style.color="white"
        this.puntuacion.style.marginTop="-540px"
        this.puntuacion.style.marginLeft="400px" 
        this.body.appendChild(this.puntuacion)
    }
}
export let puntuacion=new Puntuaciones(null,null)