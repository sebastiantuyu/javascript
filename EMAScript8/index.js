const data = {
    front: 'Sebas',
    back: 'Sebitas',
    design: 'Ana',
} 


// Entries
// Devuelve los valores de un objeto
const entries = Object.entries(data)

// Tamaño de un objeto
console.log(entries.length)


// Devuelve los valores de un objeto a un ARRAY
console.table(Object.values(data).length)

// Agrega un padding para centrar los strings 
const string = 'hello'
console.log(string.padStart(5,' ---------'))
console.log('jasndjkasn'.padEnd(15,'-------------------------'))


/* *******************************
*                                    *   
*                                    *       
*              ASYNC AWAIT           *   
*                                    *       
*                                    *       
 ***********************************/

 const testing = () => {
     return new Promise((resolve,reject)=>{
            (true) ?
             setTimeout(() => resolve('Hello world'), 300)
             : reject( new Error('Error test'))

     })
 }


 let test = async () =>{
     const hey = await testing()
     console.log(hey)
 }
 
 test()
 console.log("this should be first")