// RUTA PRINCIPAL DE LA API STAR WARS 

const ROOT_URL = 'https://www.swapi.tech/api/'
const PEOPLE_URL = 'people/:id'
const options = { crossDomain:true }



/***************************** 

           PROMESAS

*****************************/

function getPersona(id){
        return new Promise((resolve,reject) => {
        const URL =`${ROOT_URL}${PEOPLE_URL.replace(':id', id)}`
            $
            .get(URL, options, function(data){
                // cuando la promesa se resuelve, obtiene el valor DATA
                resolve(data)
                // resolve(DATA) apunta hacia el .then de la PROMESA
            })
            // cuando la promesa no se resuelve, se envia hacia rejected
            .fail(() => reject(id))
            // .fail apunta hacia CATCH
            
            })
}

function onError(id){
    console.log(`Error obteniendo el valor del ID ${id}`)
}



async function allPersonas(){
    var ids = [1,2,3,4,5,6,7]
    // CREAMOS EL ARRAY CON TODAS LAS PROMESAS
    var promesas = ids.map( id => getPersona(id))
    try{

        // PASAMOS LAS PROMESAS EN UN ARRAY, PERO SOLO SE EJECUTA HASTA 
        // QUE SE CUMPLAN TODAS LAS PROMESAS
        
        var personajes = await Promise.all(promesas)
        console.table(personajes)
    }catch (id){
        onError(id)
    }
}


/***************************** 

           PROMESAS
           EN SERIE

****************************

FUNCION DE ERROR LLAMADA POR EL CATCH

function onError(id){
    console.log(`Error obteniendo el valor del ID ${id}`)
}

getPersona(1)
    .then(people => {
        console.log(`${people.result.properties.name} ID${people.result.uid}`)    
        return getPersona(2)
    })
    .then(people => {
        console.log(`${people.result.properties.name}`)    
        return getPersona(3)
    })
    .then(people => {
        console.log(`${people.result.properties.name}`)    
        return getPersona(4)
    })
    .then(people => {
        console.log(`${people.result.properties.name}`)    
        return getPersona(5)
    })
    .catch(onError)
 */

