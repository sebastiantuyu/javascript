/* **********************************
*       POO EN JAVASCRIPT           *
*     EN JS, PROTOTIPOS = CLASES    *
*     EL this. SIN ESP, HACE REF    *
*       A EL WINDOW PRINCIPAL       *    
*   -----------------------------   *
*   |    El debugger sirve para     *
*   |    deter el codigo antes de   * 
*   |_____ ser ejecutado            *
*                                   *
*********************************** */


/**********************************
*       HERENCIA PROTOTIPAL       *
*        (MODELO ANTIGUO)         *
*                                 *              
*           ES5 (2015)
*
*    function hereda(pHijo,pPadre){
*    var fn = function(){}
*    fn.prototype = pPadre.prototype
*    pHijo.prototype = new fn
*    pHijo.prototype.constructor = pHijo
} ********************************* */

class Persona {
    constructor (nombre, apellido, altura){
        this.nombre = nombre,
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`)  
    }
    
    soyAlto(){
        return this.altura>1.8
    }
}


class Desarollador extends Persona {
    constructor (nombre,apellido,altura){
        super(nombre,apellido,altura)
    }

    saludame(){
        console.log(` Hola me llamo ${this.nombre}, y soy desarollador`)
    }
}



/* hereda(Desarrolador,Persona) */
/* var Paula = new Persona('Paula','Gomez',1.81)
var Diego = new Persona('Diego','Vela',1.45)
var Juan = new Persona('John','Kirchoff',1.65) */


