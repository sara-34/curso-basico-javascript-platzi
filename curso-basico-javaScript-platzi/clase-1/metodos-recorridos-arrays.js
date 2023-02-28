//Creando arrays con objetos dentro.

var listaArticulos = [
    {
        nombre:"Bici",
        costo:3000,
    },
    {
        nombre:"TV",
        costo:2500
    },
    {
        nombre:"Libro",
        costo:500
    },
    {
        nombre:"Nevera",
        costo:50000
    },
    {
        nombre:"Lavadora",
        costo:60000
    },

    {
        nombre:"Lapto",
        costo:20000
    }
];

//Me trae todos los articulos menores a 500 incluyendo los de 500 pesos(filter)Cosas especificas.
var articulosFiltrados = listaArticulos.filter(function(articulo){
    return articulo.costo <= 500

});


//Segundo metodo de recorrido arrays(map)trae los nombre en string que se dieron a buscar mapea todo el array y trae las cosas especificas del array.

var nombreArticulos = listaArticulos.map(function(articulo){
    return articulo.nombre

});