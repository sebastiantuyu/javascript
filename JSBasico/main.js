// Objetos 

var persona ={
    nombre:'Sebastian',
    apellido:'Tuyu',
    edad:20
}

// PASAMOS EL OBJETO PERO EL ARGUMNTO ES UNA PROPIEDAD
// DEL OBJETO, NO EL OBJETO EN SI

// function imprimirNombreMayus({nombre}){
function imprimirNombreMayus(persona){
    // var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}


imprimirNombreMayus(persona);

function printNameAndAge(persona){
    var {edad} = persona;
    var {nombre} = persona;
    console.log( `Hola, me llamo ${nombre} y tengo ${edad} años`);
}

printNameAndAge(persona);


function cumpleanos(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
    //persona.edad +=1;
}


const MAYORIA_EDAD = 18

// funciones que devuelven valores

/* 
function bigg(persona){
    return persona.edad >= MAYORIA_EDAD
} */

const bigg = ({edad}) => edad >= MAYORIA_EDAD


// FUNCION FLECHA 
// EL OPERADOR ? PERMITE HACER UN COMPARADOR IF EN UNA SOLA LINA DE CODIGO
const minor = ({edad}) => !bigg({edad}) ?
console.log("ACCESO DENEGADO"):console.log("PODÉS PASAR")
// ( CODIGO EN CASO DE SER TRUE):( CODIGO EN CASO DE SER FALSE)
function mayor(persona){

    if(bigg(persona)){
        console.log(`${persona.nombre} es mayor de edad` )
    }else{
        console.log(`${persona.nombre} NO es mayor de edad`)
    }
}