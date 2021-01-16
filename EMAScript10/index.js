let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat(2))

//console.log(array.)
let array_2 = [1,2,3,4,5]
console.log(array_2.flatMap(value => [value, value*2]))

// RECORTAR ESPACIOS EN BLANCO PARA LOS STIRNGS

var test = "                 hola"
var test_2 = "hola                        "
console.log(test)
console.log(test.trimStart())

console.log("*".repeat(15))
console.log(test_2)
console.log(test_2.trimEnd())



// ADICION DE ERROR COMO ARGUMENTO OPCIONAL
try{
    console.log(asdasd)
}catch (error){
    console.log(error)
}

// CONVERTIR DE OBJETOS A ARREGLOS, O DE ARREGLOS A OBJETOS
let entries = [['name','Sebastian'],['bdate','1fstJan']]

console.log(Object.fromEntries(entries))


// OBJETO DE TIPO SIMBOLO
// ?????????
let mys = 'MyS'
let symbol = Symbol(mys)
console.log(symbol.description)