// RUTA PRINCIPAL DE LA API STAR WARS 

const ROOT_URL = 'https://www.swapi.tech/api/'
const PEOPLE_URL = 'people/:id'

const FULL_URL=`${ROOT_URL}${PEOPLE_URL.replace(':id',1)}`

const options = { crossDomain:true }
const onPeopleResponse = function(people){console.log(`${people.result.properties.name}`)}



$.get(FULL_URL, options, onPeopleResponse)
