// interfaces

enum Color {
    Rojo =  'Rojo',
    Verde = "Verde",
    Azul = 'Azul',
}

interface Rec{
    ancho:number
    alto:number
    color: Color
}
let rect: Rec ={
    ancho:4,
    alto:6,
    color: Color.Azul
}

function area(r: Rec): number {
    return r.alto * r.ancho
}

const final = area(rect);
console.log(final); 

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}`:`No hay color para el rectangulo`
} 
console.log(rect.toString())