// PRACTICA BUCLE WHILE
const INCREMENTO_PESO = 0.2

var persona ={
    nombre: 'Sebastian',
    edad: 21,
    peso: 45
}

const META = persona.peso - 5
/* console.log(META) */
const menosPeso = persona => persona.peso -= INCREMENTO_PESO

const masPeso = ({peso}) => peso +=INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.3
const seEjercita = () => Math.random() < 0.4


while(persona.peso > META){
    console.log(`${persona.peso} > ${META}`)
    
  if(comeMucho()){
    // BAJA DE PESO
    console.log("    ")
    console.log("Sube de peso")
    
    masPeso(persona)
  }
  if(seEjercita()){
    // SUBE DE PESO
    menosPeso(persona)
  }
}
console.log(`El peso es de ${persona.peso}`)