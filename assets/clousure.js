// Funcion autoinvocada
// IIFE
(function(){
    let color = 'green';

    function printColor(){
        console.log(color);
    }

  //  printColor();
})();


// Funciones que regresan funciones

function makeColorPrinter(color){

    let colorMsg = 'The color is ${color}';

    return function(){
        console.log(colorMsg);
    };
}

    //let greenCP = makeColorPrinter('green');
    //console.log(makeColorPrinter());



// Variables privadas

 function makeCounter(n){
     let count = n;

     return {
         increase: function(){
            return count += 1;
         },
         decrease: function(){
            return count-=1;
         },
         getCount: function(){
             return count;
         },
     };     
 }


     let counter = makeCounter(7);
     console.log(counter.decrease());
