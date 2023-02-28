function miAuto(Marca, Modelo, Annio) {
    this.modelo = Modelo;
    this.marca = Marca;
    this.annio = Annio;
    
}

var auto = [];

for (let i = 0; i < 30; i++) {
    var marca = prompt("Ingresa el marca del auto");
    var modelo = prompt("ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    
}

for (let i = 0; i < auto.length; i++) {
    console.log(auto[i]);
    
}



//Ejemplo 2

function datosPerritos(Raza, Annios, Nombre) {
    this.raza = Raza;
    this.annios = Annios;
    this.nombre = Nombre;
}

var perrito = [];

for (let i = 0; i < 1; i++) {
    var raza = prompt("Ingrese la raza del perro");
    var annios = prompt("¿Cuanto años tiene el perro?");
    var nombre = prompt("¿Cual es el nombre del perro?");
}

for (let i = 0; i < perrito.length; i++) {
    console.log(perrito[i]); 
}