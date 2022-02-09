const automovil=function(color,marca){
    this.color=color 
    this.marca=marca

    this.acelerar=function(){
        console.log("Estoy acelerando")
    }
}
const ford=new automovil('rojo','ford') 

console.log(ford.acelerar())    

