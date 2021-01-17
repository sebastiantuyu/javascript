
// Declaramos una "clase"
function Hero(name){
    //hero = Object.create(heroMethods)
    this.name = name
}

/*
    No usamos esta seccion, porque hacemos la referenica despues

const heroMethods = {
    saludar: function(){
        console.log(`Me ${this.name}`)
    }
    
}*/

Hero.prototype.saludar = function(){
    console.log(`Hola, soy ${this.name}`)
}
const Zelda = new Hero('Zelda')

console.log('Name', Zelda.name)
console.log('Saludar: ',Zelda.saludar)
console.log('toString', Zelda.toString)