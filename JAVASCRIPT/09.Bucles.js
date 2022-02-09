//Bucles 
//Son unas estructuras de control de flujo que se van repitiendo 
//dada una condición 

//While (mientras)

// let timer=0; 

// while(timer<40){
//      timer++
//      console.log("timer:" + timer)
// }

//Do While (haz mientras) 

// let timer=0; 

// do{
 
//  timer++
//  console.log('timer:'+timer)

// }while(timer>3)


//FOR 

// let frutas=['fresa','limon','piña']
// frutas.push('sandia','pera')

// for(let i=0;i<frutas.length;i++){
//     console.log(frutas[i])
// }


//FOR OF 
//nos devuelve los elementos del array 

// let numeros=[4,56,78,3,5,9]

// for(const numero of numeros){
//     console.log(numero)
// }


//FOR IN  
//Recorre un array y nos devuelve los indices 

// let booleanos=[true,false,true,false]

// for(const booleano in booleanos){
//     console.log(booleano) 
//     console.log(booleanos[booleano])
// }

//Recorremos un objeto con un for in  

const pais={
    nombre:"Francia",
    idioma:"Francés",
    presidente:"Emmanuel Macron",
    habitantes:4000000,
    cultura:['culinaria','arte']
}


for(const dato in pais){
    console.log(`key:${dato},value:${pais[dato]}`)
}


