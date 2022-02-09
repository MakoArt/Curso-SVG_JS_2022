

class Dividir{
     constructor(numero1,numero2){
         this.numero1=numero1 
         this.numero2=numero2
     }
     realizarDivision(){
         return this.numero1/this.numero2
     }
}
export let division=new Dividir(100,2)