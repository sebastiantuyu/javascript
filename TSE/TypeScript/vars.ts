
//Boolean

let muted: boolean; 
muted = true;


// Numeros

let age = 6;
let numerador: number = 42;
let denominador: number = age;
let result = numerador/denominador;


// Strings
let nombre: string = 'Sebastian'
let saludo: string = `Hola, soy ${nombre}`
console.log(saludo)


// Arreglos
let people: string[] = [];
people = ["Isabel","Nicole",]
let peopleNumbers: Array< string | number > = []
peopleNumbers.push(nombre)
peopleNumbers.push(42)

//Enum conjunto de valores

enum Color{
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}

let favcol: Color = Color.Rojo;
console.log(favcol)

// ANY

let comodin: any = "Joker"
comodin = { type: 'Wildcard' }


// OBJECT

let SomeObject: object = { type: 'Wildcard' }
