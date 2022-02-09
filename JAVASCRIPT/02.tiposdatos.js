//Primitivos 
//numbers ,strings
//boolean,undefined,null 

//number
const edad=20;
console.log(typeof edad)
const grados=5.6;
console.log(typeof grados)

//string 
const nombre="Maria"
console.log(typeof nombre)

//boolean (true o false)
const isWorking=true 
console.log(typeof isWorking)

//undefined 
let perro; 
console.log(typeof perro)

//null 
let enfermo=null
console.log(typeof enfermo)



//OBJETOS 

const persona={
    nombre:'Maria',
    apellidos:'Gonzalez Perez',
    edad:23
}

console.log(persona.apellidos)
console.log(persona.edad)

//Arrays o listas 
const frutas=['manzana','pera',34,true,['hola']]
frutas.push('sandia') 

console.log(frutas)
