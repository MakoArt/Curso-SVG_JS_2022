
//setTimeout

// let finalizarTemporizador=true; 

// let temporizador=setTimeout(()=>{
//    console.log("Buenos dias")
//    finalizarTemporizador=true
// },10000)

// if(finalizarTemporizador)clearTimeout(temporizador)


//setInterval ********************************************


// let contador=0 
// let intervalo; 


// function limpiaIntervalo(){
//   clearInterval(intervalo)
// }

// intervalo=setInterval(()=>{
//  contador++ 
//  console.log(contador)
//  if(contador>=17){
//     limpiaIntervalo()
//  }

// },1000)



//window.requestAnimationFrame()*********************** 


function holaMundo(){
    let saludo=window.requestAnimationFrame(holaMundo)

      console.log("Hola mundo")

    saludo>2000 ? window.cancelAnimationFrame(saludo) :null
}
holaMundo()