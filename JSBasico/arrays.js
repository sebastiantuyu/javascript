// ARRAYS PRACTICE
//mport Data from './data.js'
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const ALTA = 1.80
//const esAlta = ({altura}) =>  altura> ALTA

var personas = [sacha,alan,martin,dario,vicky,paula]
const esAlta = persona =>  persona.altura> ALTA

/* for (x of personas){
    if(esAlta(x)){
        console.log("Es alta")
    }
} */
var personasAltas = personas.filter(esAlta)

const MtoCm = persona => {
    return{
        // Copia los atributos del objeto que esta DENTRO del array
        ...persona,
        // Los modifica en el atributo que modifiquemos 
        altura: persona.altura * 100
    }
}
var AlturasCambio = personas.map(MtoCm)
console.log(AlturasCambio)

/* ********************************************
*                                             *
*               FUNCION REDUCE                *
*    LLAMA UNA FUNCION, AGREGA UN CONTADOR    *
*                                             *  
***********************************************/


const reducer = (acum,{altura}) => acum + altura

var total = personas.reduce(reducer,0)