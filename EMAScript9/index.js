const persona = {
    name: 'Sebastian',
    age: 21,
    country: 'MX',
}


// De estructurar objetos
let {age, ...all} = persona;
console.log(all);


const obj = {
    ...persona,
    country: 'US',
}

console.log(Object.entries(obj))


/*
    SABER CUANDO SE TERMINA UNA PROMESA 
        CON LA FUNCION FINALE

*/

const testing = () =>{
    return new Promise((resolve,reject) => {
            (true) ?
            setTimeout(() => resolve('whuuu'),300)
            :reject(new Error('Test error'))

    })
}

testing()
    .finally(() => console.log("Over"))
    .then(response => console.log(response))
    .catch(response => console.log(response))



// AGRUPACIONES DE REJEX


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year)
console.log(month)
console.log(day)