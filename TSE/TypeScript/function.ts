function add(a: number,b:number){
    return a+b;
}

const sum = add(4,6)

function createOther(a:number){

    return function (b:number){
        return a + b
    }
}

const one =  createOther(4)
const two = one(6)
console.log(two)


function fullName(fName: string, lName:string = 'Tuyu'){
    return `${fName}${lName}`
}

const sebas = fullName('Sebastian')
console.log(sebas)