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
***********************************/       
function hereda(pHijo,pPadre){
    var fn = function(){}
    fn.prototype = pPadre.prototype
    pHijo.prototype = new fn
    pHijo.prototype.constructor = pHijo
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre,
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre}`)  
} 

Persona.prototype.soyAlto = function() {
    return this.altura>1.8
}


function Desarrolador(nombre,apellido){
    this.nombre=nombre,
    this.apellido=apellido
}

Desarrolador.prototype.saludame = function(){
    console.log(` Hola me llamo ${this.nombre}, y soy desarollador`)
}


hereda(Desarrolador,Persona)
/* var Paula = new Persona('Paula','Gomez',1.81)
var Diego = new Persona('Diego','Vela',1.45)
var Juan = new Persona('John','Kirchoff',1.65) */


