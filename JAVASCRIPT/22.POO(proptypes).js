function Motocicleta(marca,modelo){
    this.marca=marca 
    this.modelo=modelo
}

//métodos 
Motocicleta.prototype.circular=function(){
    console.log("La motocicleta esta en marcha")
}

//Instancia de automovil 

const Kawasaki=new Motocicleta('Kawasaki','ninja')
console.log(Kawasaki.circular()) 


//va a heredar de Motocicleta

function Ciclomotor(marca,modelo,seguro){
    this.super=Motocicleta 
    this.super(marca,modelo)
    this.seguro=seguro
}

//instancia de ciclomotor  

const derbi=Ciclomotor.prototype=new Motocicleta() 
Ciclomotor.prototype.constructor=Motocicleta 

console.log(derbi.circular())   


//sobreescritura de metodos  

Ciclomotor.prototype.circular=function(){
    console.log("La ciclomotor esta en marcha")
}

//Metodos propios  
Ciclomotor.prototype.acelerar=function(){
    console.log("Estoy acelerando")
}

derbi.circular()
derbi.acelerar()