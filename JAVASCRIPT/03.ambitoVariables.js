//Ámbito Superglobal (no lo veremos aquí)
//Ámbito Global (Es accesible desde cualquier lado del archivo)
let nombre="Isidoro"
//Ámbito Local  (funcion)

//Ámbito de bloque  (for, if )




function imprimir(){
 console.log(nombre)
 
 if(nombre=="Isidoro"){ 
    let mascota="Perro" 
    return mascota
 }
 
 let edad=34;
 return edad

}


console.log(imprimir())



/**Soy un comentario 
 * de varias lineas 
 */
