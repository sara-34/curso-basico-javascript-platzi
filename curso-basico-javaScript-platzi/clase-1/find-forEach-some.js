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


//Lo que hace es asignarle la busqueda de un objeto dentro del array, pero si este no se encuentra no retorna nada.
var encuentraArticulo = listaArticulos.find(function(articulo){
    return articulo.nombre === "Lapto"
});

var encuentraArticulo = listaArticulos.find(function(articulo) {

    return articulo.nombre === "Lavadora";
    
});

//foreach solo es el filltrado sin modificar cosas ni crear nuevos arrays y solo va a regrasar cosas.
listaArticulos.forEach(function(articulo){
    console.log(articulo.nombre);

});

listaArticulos.forEach(function(articulo){
    console.log(articulo.costo);

});


//Some nos regresa una validacion de verdaderos o falsos para articulos que cumplan la funcion
var articulosBaratos = listaArticulos.some(function(articulo){
    return articulo.costo <= 700;
})

