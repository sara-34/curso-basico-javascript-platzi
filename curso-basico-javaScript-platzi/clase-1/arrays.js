//Estructura basica del array
var frutas = ["Manzana","fresa","uva", "banano", "cereza"];
//Push nos sirve para agregar elementos al final de nuestro array.
var masFrutas = frutas.push("Uvas");
//pop nos sirve para eliminar el ultimo elemento de la lista de array que no necesitemos.
var ultimo = frutas.pop("Uvas");
//Agregar unshift un nuevo valor al inicio del array.
var nuevaLongitud = frutas.unshift("flores amarillas")
console.log(frutas);
//Eliminar el primer elemento del array.
var borrarFruta = frutas.shift("flores amarillas");
//Posicion de elemnto dentro del array.
var posicion = frutas.indexOf("banano");
//Acompañado de posicion.
posicion;