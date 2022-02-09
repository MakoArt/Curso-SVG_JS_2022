//Operadores de Comparacion 

// < menor que 
// > mayor que 
// >= mayor o igual que 
//<= menor o igual que 
//== igual que 
//=== estrictamente igual 
//!= diferente 
//!== estrictamente diferente 


//Estrictamente igual o diferente  

let numero2="45"
let numero3=45 

if(numero2===numero3){
    console.log("Estos numeros son diferentes")
}else{
    console.log("Estos numeros son iguales")
}


// let edad=30; 
// let temperatura=35;
// let nombre="Jose"; 
// let empleo="Conductor"; 

// if(nombre!="Jose"){
//     console.log("Ese no es su nombre")
// }else{
//     console.log("Si es su nombre")
// }

// if(edad==30){
//     console.log("La edad es igual a 30")
// }else if(edad>30){
//     console.log("La edad es mayor que 30")
// }else{
//     console.log("La edad es menor a 30")
// }


// if(temperatura>=35){
//     console.log("Hace mucho calor ");
// }else{
//     console.log("No hace mucho calor");
// }


// //Condicional ternario u operador ternario 

// edad>30 ? console.log("Es mayor que 30") : console.log("Es menor o igual que 30")


// //Switch case  

// let edad2=20; 

// switch(edad2){
//     case 18: 
//     console.log("Eres apto para el nivel 5 ") 
//     break;
//     case 20: 
//     console.log("Eres apto para el nivel 6"); 
//     break;
//     case 30: 
//     console.log("Eres apto para el nivel 7"); 
//     break;
//     case 21: 
//     console.log("Eres apto para el primer nivel"); 
//     break;
//     default: 
//     console.log("No eres apto para el puesto")
// }



//OPERADORES LÓGICOS 

//!Operador de negación  
//&& operador and o y 
//|| operador or o ó  


// let numero=41; 
// let diaSemana="Miercoles";

// if(numero>40 && diaSemana=="Miercoles"){
//     console.log("Identificación correcta")
// } else{
//     console.log("La entrada esta restringida")
// }

// let dinero=4000; 
// let genero="Hombre"; 

// if(dinero>3000 || genero=="Mujer"){
//     console.log("Identificación correcta")
// } else{
//     console.log("La entrada esta restringida")
// }

//OPERADOR DE NEGACIÓN 

let isWorking=true  


if(!isWorking){
    console.log("Esta trabajando")
}
