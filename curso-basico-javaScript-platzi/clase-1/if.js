var numeroPerros = 20;

if (numeroPerros === 20) {
    console.log("Tienes muchos perros")
}else if (numeroPerros <= 15) {
    console.log("Te falta 5 perros");
    
}else{
    console.log("No tienes ningun perro");
}

//Ejemplo Descuento.

var precio = 10;
var articulos;
if(articulos >= 5 && articulos < 10) {
    precio = precio * (1-0.10)
}else if(articulos >= 10 && articulos < 15){
    precio = precio * (1-0.15)
}else{
    precio = precio * (1-0.20)
}









