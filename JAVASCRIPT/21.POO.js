/*
CLASS
*/

/*
protected 
public 
private 
En javascript todos los métodos y propiedades son publicas
*/ 

class Automovil{
      constructor(marca,modelo,fechaLanzamiento,combustible,color,velocidad,velocidadMaxima){
          this.marca=marca 
          this.modelo=modelo 
          this.fechaLanzamiento=fechaLanzamiento 
          this.combustible=combustible 
          this.color=color
          this.velocidad=velocidad
          this.velocidadMaxima=velocidadMaxima
      } 
      //getter 
      get getColor(){
          return this.color
      }
      //setter

      set setColor(color){
          this.color=color;
      }
      
      arrancar(){
        this.velocidad+=1
      }
      enCirculacion(){
        this.velocidad+=6
        return this.velocidad
      }
      frenar(){
        this.velocidad/=0.02
      }
      parado(){
          this.velocidad+=0 
          return "El coche esta parado"
         
        
      }

      static abrirPuerta(){
          return "Estás introduciendote en el vehículo"
      }
  
}

let mercedes=new Automovil('mercedes','300','23-02-2017','gasolina','rojo',0,240)
let porche=new Automovil('porche','400','23-12-2017','diesel','azul',0,230)
let renault=new Automovil('renault','indor','23-02-2013','gasolina','blanco',0,200)

console.log(mercedes._modelo)
console.log(mercedes.enCirculacion())
console.log(Automovil.abrirPuerta())

//setters y getters  
console.log("aqui aun no hemos cambiado el color y es :" + mercedes.getColor) 
mercedes.setColor="amarillo"
console.log("Hemos cambiado el color a color:" + mercedes.getColor)



class Ciclomotor extends Automovil{
      constructor(cilindrada,marca,modelo,fechaLanzamiento,combustible,color,velocidad,velocidadMaxima){
        super(marca,modelo,fechaLanzamiento,combustible,color,velocidad,velocidadMaxima)
        
        this.cilindrada=cilindrada
    
      }
      parado(){
          return "La moto esta parada"
      }
   
}
let ciclo=new Ciclomotor('500cc','Honda','HR','23-3-2009','gasolina','verde',0,250)


console.log(ciclo.parado())






class Persona{
     constructor(genero,altura,peso,edad,aficciones,profesion,velocidad){
         this.genero=genero 
         this.altura=altura 
         this.peso=peso 
         this.edad=edad 
         this.aficciones=aficciones 
         this.profesion=profesion
     }
     correr(){
        this.velocidad+=4 
     }
     pararse(){
         this.velocidad+=0 
     }
}