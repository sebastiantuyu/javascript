//  Creación de objetos en JS

function car(brand, model, year){
    this.brand = brand,
    this.model = model,
    this.year = year,
    getModel: function () { return this.brand + "Model: " + this.model;};
}
var miCar = {
    brand: "Toyota",
    model: "Croll",
    detalle: function(){console.log("okokok");}
}

var articulo = [
    {nombre:"Cosa1",costo:20},
    {nombre:"Cosa2",costo:20},
    {nombre:"Cosa3",costo:20},
    {nombre:"Cosa4",costo:20},

];

var name_articulo = articulo.map(
    function(articulo){
        return articulo.nombre;
    }
);