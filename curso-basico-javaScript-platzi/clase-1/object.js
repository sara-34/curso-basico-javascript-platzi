//objeto estructura.
var miCasa = {
    direccion:"Cuba",
    barrio:"2.500 lotes",
    baños:3,
    color:"blanca",
    habitaciones:5,
    detalleDeLaCasa: function() {
        console.log(`Casa ${this.barrio} ${this.color}`); 
    }
};

//Acceder a la informacion.

miCasa.direccion;

var miCasa = {
    direccion:"Cuba",
    barrio:"2.500 lotes",
    baños:3,
    color:"blanca",
    habitaciones:5,
    detalleDeLaCasa: function() {
        console.log(`Casa ${this.barrio} ${this.color}`); 
    }
};

//Funcion Constructora.

function casa(muebles, modelo, añoConstruccion) {

    this.añoConstruccion = añoConstruccion;
    this.modelo = modelo;
    this.muebles = muebles;

}


// Construccion de nuevo objeto.


var casaNueva = new casa(2013, "Moderna", "Amoblada");

casaNueva;

//Instancias constructoras.

var casaNueva2 = new casa(2013, "Moderna", "Amoblada");
var casaNueva3 = new casa(2013, "Moderna", "Amoblada");var casaNueva2 = new casa(2013, "Moderna", "Amoblada");
var casaNueva4 = new casa(2013, "Moderna", "Amoblada");


casaNueva2;



