const cajaAzul=document.querySelector('#cajaAzul')
const cajaRoja=document.querySelector('#cajaRoja')

let vidas=5;
let puntuacion=0; 

//Estilos de cajaAzul 
cajaAzul.style.width="50px"; 
cajaAzul.style.height="50px"; 
cajaAzul.style.border="2px solid black";
cajaAzul.style.backgroundColor="blue";

//Estilos de cajaRoja

cajaRoja.style.width="50px"; 
cajaRoja.style.height="50px"; 
cajaRoja.style.border="2px solid black";
cajaRoja.style.backgroundColor="red";

function restarVidas(){
    //vidas=vidas-1 
    vidas-=1 
console.log("El numero de vidas son:" + vidas); 
}


function sumarPuntuacion(){
   //puntuacion=puntuacion + 1
   puntuacion+=1
    console.log(`La puntuacion es: ${puntuacion}`)
}

//eventos  

window.addEventListener('click',(e)=>{
    e.preventDefault()

   if(e.target.matches('#cajaAzul')){
       e.preventDefault()
       sumarPuntuacion()
   }

   if(e.target.matches('#cajaRoja')){
       e.preventDefault()
       restarVidas()
   }


})