//FUNCIÓN DECLARADA QUE DEVUELVE UN SALUDO

// function saludo(){
//     console.log("Buenos dias")
//     console.log("Esto es un saludo")
// }
// saludo()


//FUNCIÓN DECLARADA CON PASO DE PARAMETROS 

//  function saludando(nombre,saludo){
//      console.log("Hola que tal ," + saludo + nombre)
//  }
//  saludando(" Maria "," buenas noches ")  

//FUNCION DECLARADA QUE DEVUELVE UN VALOR  

// function suma(numero1,numero2){
//    let resultadoSuma=numero1 + numero2 
//    return resultadoSuma
// }

// console.log(suma(4,5))

//FUNCIONES EXPRESADAS  

// const saludar=function(nombre){
//     console.log(" Hola que tal " + nombre)
// }
// saludar("Javier")

 



// //Por efecto hoisting o elevación se permite 
// //llamar a la función antes de declararla
// saludar2("Pedro")

// function saludar2(nombre){
//     console.log("Hola que tal " + nombre)
// }


//FUNCIONES FLECHA 
//apunte tener encuenta 
//Estas funciones no respetan el contexto de this. 

// const multiplicar=(numero4,numero5)=>{
    
//     return numero4 * numero5 
// }

// console.log(multiplicar(4,5)) 

//FUNCIONES AUTOEJECUTABLES CLÁSICAS 

// const saludoAutoejecutable=(function(numero1,numero2){
     
//     return numero1 + numero2

// })(5,6)

// console.log(saludoAutoejecutable) 


//FUNCIONES AUTOEJECUTABLES MODERNAS 

// const frase=(()=>{
//     console.log("Buenas tardes")
// })()


//FUNCIONES ANONIMAS AUTOEJECUTABLES CLÁSICAS  

// (function(){
//    console.log("Soy una función anonima autoejecutable")
// })()


//FUNCIONES ANONIMAS AUTOEJECUTABLES MODERNAS 
 
// (()=>{
//     console.log("Soy una funcion anonima autoejecutable algo más moderna ")
// })()

