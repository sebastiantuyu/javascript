

var name_ = 'sebastian'
var age = 17

// OBJETOS 


var nombres = ['Sebastian','Alejandro','Tuyu']

var full_name = [...nombres,'Piñeiro']

// ES5
obj1 = { name: name_,age: age };


// ES6
// si la variable se llama igual que el atributo no tienes que repetir
obj2 = { name_, age}


const names = [
    { name:'Oscar', age:21 },
    { name:'Pedro', age:21 }
]

let ListOfNames = names.map(item => console.log(item.age))



// Promesas 

const testPromise = () => {
    return new Promise((resolve,reject) => {
        if (true){
            //Valor que va a devolver la consola
            resolve('Hey!')
        }else{
            reject('Ups!!')
        }
    })
}

testPromise()
        .then(response => console.log(response))
        .catch(error => console.log(error))