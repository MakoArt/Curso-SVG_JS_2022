//vamos a acceder al body  
// console.log(document.body)
// console.log(document)

//Seleccion de elementos por etiqueta  
// const subtitulo3=document.querySelector('#sub3')
// subtitulo3.style.color="blue"
// const subtitulo4=document.querySelector('#sub4')
// subtitulo4.style.color="pink"
// const subtitulo5=document.querySelector('.sub5')
// subtitulo5.style.color="red"


// subtitulo.style.color="red"
// subtitulo.style.fontFamily="Verdana"
// subtitulo.style.backgroundColor="green"
// subtitulo.style.textShadow="9px 9px 5px black"
// subtitulo.style.border="4px solid black"
// subtitulo.style.textAlign="center" 
// subtitulo.textContent="Soy un subtitulo"

// //creando un fragment   
// let container=document.createDocumentFragment()
// document.appendChild(container)

// //viendo el dominio 
// console.log(document.domain) 

// //primer hijo del documento 
// console.log(document.firstChild) 


//Queryselectorall  

// const subtitulos=[...document.querySelectorAll('h2')]

// subtitulos.map(subtitulo=>{
//     subtitulo.style.color="yellow"
//     subtitulo.style.backgroundColor="brown"
// })

//getElementById() 
// const subtitulo=document.getElementById('sub1')
// subtitulo.style.color="blue"

//CREACIÓN DE ELEMENTOS  

let caja=document.createElement('div') 
let caja2=document.createElement('div')

caja.style.width="200px"
caja.style.height="200px"
caja.style.backgroundColor="indigo"
caja.style.borderRadius="50%"

caja2.style.width="200px"
caja2.style.height="200px"
caja2.style.backgroundColor="orangered"
caja2.style.borderRadius="50%"


document.body.append(caja,caja2)

//como saber la codificacion de caracteres 
console.log(document.characterSet)
//elementos hijos del documento 
console.log(document.childElementCount)
//Nodos hijos del documento  
console.log(document.childNodes)
//Para devolvernos los hijos que tiene 
console.log(document.children)