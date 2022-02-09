import Proyectil from './03.proyectil.js' 
export let listaProyectiles=[]

class Protagonista{
    constructor(rect,svg,x,y,width,height,color,velocidad,derecha,izquierda,disparo){
        this.rect=rect 
        this.svg=svg 
        this.x=x 
        this.y=y 
        this.width=width 
        this.height=height 
        this.color=color 
        this.velocidad=velocidad 
        this.derecha=derecha 
        this.izquierda=izquierda 
        this.disparo=disparo
    }
    dibuja(){
       
        this.rect.setAttribute('x',`${this.x}`) 
        this.rect.setAttribute('y',`${this.y}`)
        this.rect.setAttribute('width',`${this.width}`)
        this.rect.setAttribute('height',`${this.height}`)
        this.rect.setAttribute('fill',`${this.color}`) 
        this.svg.appendChild(this.rect)
    
    }
    moverDerecha(){
       this.x+=this.velocidad
       if(listaProyectiles[0].posY==this.y)
       listaProyectiles[0].posX=this.x + 15
    }
    moverIzquierda(){
       this.x-=this.velocidad
       if(listaProyectiles[0].posY==this.y)
       listaProyectiles[0].posX=this.x + 15
    }
    mueve(){
        window.addEventListener('keydown',(e)=>{

            if(e.key=='d' || e.key=='D'){
                this.derecha=true 
                if(this.derecha){
                    this.moverDerecha()
                }
            }

            if(e.key=='a' || e.key=='A'){
                this.izquierda=true 
                if(this.izquierda){
                    this.moverIzquierda()
                }
            }

        })
    }
   
    recargaProyectil(){
        if(listaProyectiles.length<=1){
            listaProyectiles.push(new Proyectil(document.createElementNS('http://www.w3.org/2000/svg','circle'),document.getElementById('svg'),this.x + 15 ,this.y,10,'brown',7,false))
            listaProyectiles.splice(1)
        }
        listaProyectiles[0].dibuja()
        if(listaProyectiles[0].posY<0){
            listaProyectiles[0].posY=nave.y
            listaProyectiles[0].posX=nave.x + 15 
        }
        window.addEventListener('keydown',(e)=>{
            e.preventDefault()

            if(e.key==' ' && listaProyectiles[0].disparando==false ){
                listaProyectiles[0].disparando=true
            }
        })
        
        if(listaProyectiles[0].disparando){
            listaProyectiles[0].posY-=listaProyectiles[0].velocidad
            if(listaProyectiles[0].posY<0) {
                listaProyectiles[0].disparando=false
            }

        }

    }

}

export let nave=new Protagonista(document.createElementNS('http://www.w3.org/2000/svg','rect'),
                                 document.getElementById('svg'),
                                 100, 
                                 200,
                                 30,
                                 50,
                                 'green',
                                 0.01, 
                                 false,
                                 false,
                               )