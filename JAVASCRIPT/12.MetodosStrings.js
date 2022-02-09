let cadenaTexto="     Estamos estudiando los métodos de los strings"
let cadenaTexto2=" en el lenguaje javascript"




//CONCAT :Nos concatena un string 
// document.write(cadenaTexto.concat(' en javascript'))
// document.write(cadenaTexto.concat(cadenaTexto2))


//ENDSWIDTH 
//nos da true o false en función si acaba en un determinado string
// document.write(cadenaTexto.endsWith('strings'))

//FONTCOLOR  
//Nos cambia el color del texto del string  
// document.write(cadenaTexto.fontcolor('green')) 

//FONTSIZE 
//Cambia el tamaño del string  
// document.write(cadenaTexto.fontsize(6)) 

//INCLUDES 
//Nos da true o false en función de si el 
//caracter o conjunto de caracteres que 
//le indiquemos esta incluido en el 
//texto  
//document.write(cadenaTexto.includes('estudiando'))  


//INDEXOF 
//Si existe el indice que le especifiquemos 
// nos da su posición y si no -1 
// document.write(cadenaTexto.indexOf('los'))

//ITALICS 
// document.write(cadenaTexto.italics()) 


//LASTINDEXOF 
//Si existe el caracter que especificamos 
//nos dira la posicion de el ultimo que haya de ese tipo, pero si no  
//existe nos dará un -1  
// document.write(cadenaTexto.lastIndexOf('e')) 


//LENGTH(nos da la longitud de un string)
// document.write(cadenaTexto.length)

//MATCH (Nos devuelve la coincidencia si existiera si no nos devuelve un null) 
// document.write(cadenaTexto.match('los')) 

//REPEAT(Nos devuelve el string repetido las veces que le indiquemos)
// document.write(cadenaTexto.repeat(5)) 

//REPLACE(Reemplaza una parte del string por otro)
// document.write(cadenaTexto.replace('estudiando','aprendiendo'))

//SLICE(Nos devuelve u na porcion de cadena que nosotros le indiquemos 
//entre dos numeros,sin incluir el segundo indice)
// document.write(cadenaTexto.slice(8,17))

//SMALL(Hace que el string se vea más pequeño)
// document.write(cadenaTexto.small())

//SPLIT(Nos subdivide el string en substrings)
// let minusculas=cadenaTexto.toLowerCase()
// let separar=document.write(minusculas.split('',7).reverse()) 

 //STARWIDTH 
//  document.write(cadenaTexto.startsWith('E')) 

//SUB (nos da el string como si fuera un subtitulo)
// document.write(cadenaTexto.sub()) 

//SUBSTRING(Nos devuelve una porción de cadena entre dos numeros 
//que pasamos como argumentos incluyendo el primero pero 
//no el segundo)
// document.write(cadenaTexto.substring(4,8))

// //TOLOCALELOWERCASE(convierte en minuscula los caracteres pero funciona en local)
// document.write(cadenaTexto.toLocaleLowerCase())
// //TOLOWERCASE 
// document.write(cadenaTexto.toLowerCase())
// //TOLOCALUPPERCASE 
// document.write(cadenaTexto.toLocaleUpperCase())
// //TOUPPERCASE
// document.write(cadenaTexto.toUpperCase())

//TRIM  

let fraseTrim=cadenaTexto.trim()
let frase=cadenaTexto

console.log(fraseTrim.length)
console.log(frase.length)


