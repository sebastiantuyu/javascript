// RUTA PRINCIPAL DE LA API STAR WARS 

const ROOT_URL = 'https://www.swapi.tech/api/'
const PEOPLE_URL = 'people/:id'

/* const FULL_URL=`${ROOT_URL}${PEOPLE_URL.replace(':id',1)}` */

const options = { crossDomain:true }
/* const onPeopleResponse = function(people){
    console.log(`ID:(${people.result.uid}) ${people.result.properties.name}`)
}
 */


function getPersona(id,callback){
    
    const URL =`${ROOT_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(URL, options, function(people){
        console.log(`ID:(${people.result.uid}) ${people.result.properties.name}`)
    })
    
    if(callback){
        callback()
    }
}


/* SOLICITAR REQUEST EN SERIE */
getPersona(1,
     () => getPersona(2,
         () => getPersona(3,
            () => getPersona(4,
               ()=>getPersona(5) 
            ))))

