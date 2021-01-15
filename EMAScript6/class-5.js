
// MODULOS

//import { hello } from './module'
//hello();




// Generadores

function* helloWorld(){
    if (true){
        yield 'Hello, '
    }
    if (true){
        yield 'World'       
    }
};


const geneartor = helloWorld();
console.log(geneartor.next().value)
console.log(geneartor.next().value)