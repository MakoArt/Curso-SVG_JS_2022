//Metodos de los arrays 

const nombres=['Felipe','Pepe','Patricio','Pepe','Pedro']  

const apellidos=['Gonzalez','Perez','Martinez ']  

const equipoFutbol=[
    {
        id:0,
        nombre:"Luis",
        apellido:"Perez",
        edad:34
    },
    {
        id:1,
        nombre:"Javier",
        apellido:"Lopez",
        edad:31
    },
    {
        id:2,
        nombre:"Gerardo",
        apellido:"Martinez",
        edad:25
    },
    {
        id:3,
        nombre:"Carlos",
        apellido:"Urrutigoetxea",
        edad:34
    },
    {
        id:4,
        nombre:"Pere",
        apellido:"Capdevila",
        edad:20
    }
]

//CONCAT 
//concatena o une varios arrays ó añade elementos  
// console.log(nombres.concat('Felipe')) 
// console.log(nombres.concat(apellidos))


//FILTER 
//Me devuelve verdadero o falso en función de lo que queramos filtrar 

// nombres.filter(nombre=>{
//     console.log(nombre!='Pedro')
// })


//FIND 
//Busca coincidencias 

// nombres.find(nombre=>{
//     console.log(nombre=='Patricio')
// })


//FOREACH:Por cada elemento que recorre el array  

//  nombres.forEach((nombre,index)=>{
//     console.log(nombre,index)
//  })


//INCLUDES:Nos da true o false en función si existe ese elemento
//del array  
//console.log(nombres.includes('Javier')) 


//INDEXOF (Busca un elemento en el array y nos dice su posición , si no existiera nos da un -1)
 // console.log(nombres.indexOf('Pepe')) 


//LASTINDEXOF(Busca el ultimo elemento coincidente del array y nos dice su posicion si no existe -1)
// console.log(nombres.lastIndexOf('Pepe'))

//JOIN(Nos separa los elementos del array según le indiquemos)
// console.log(nombres.join('*'))

//MAP 

// equipoFutbol.map(equipo=>{
//     document.body.innerHTML+=`
    
//     <ul>
//       <li>
//        Id:${equipo.id}<br>
//        Nombre:${equipo.nombre}<br> 
//        Apellidos:${equipo.apellido}<br> 
//        Edad:${equipo.edad}
//       </li>
//     </ul>
    
//     `
// })

//POP 
//Elimina el ultimo elemento de una array 
// y nos lo devuelve  

// console.log(nombres.pop())
// console.log(nombres)


//PUSH 
//Añade un elemento al final del array  
// console.log(nombres.push('Sandra'))
// console.log(nombres) 

//REVERSE 
// console.log(nombres.reverse())

//SLICE 
//nos devuelve los indices comprendidos entre 
//el primer indice y el que le indiquemos no incluido
// console.log(nombres.slice(0,2)) 


//SORT 
//Ordena alfabeticamente los elementos 
// console.log(nombres.sort())

//UNSHIFT 
//Añade un elemento al principio del array  
//me devuelve el numero de elementos actual 
// console.log(nombres.unshift('Alejandro'))
// console.log(nombres)

//SHIFT
//Elimina el primer elemento del array 
//y nos lo devuelve
// console.log(nombres.shift())
// console.log(nombres)

//SPLICE Nos da los elementos entre dos indices pero :
//1.ponemos desde donde queremos que empieze a contar. 
//2.cuantos elementos va a eliminar o sumar 
//3.y  si va a sumar los que vaya a añadir 

// nombres.splice(0,5,'Noelia','Carla')
// console.log(nombres)

nombres.splice(0,0,'Alejandra','Susana')
console.log(nombres)  

