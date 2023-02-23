//Ejemplos Funciones Hay dos tipos de funciones.

//Estan las funciones Declrativas.

function miFuncion(a,b) {
    return a + b;
    
}

//LLamando funcion declarativa.
miFuncion();

/*
funcion nombre (parametros){
    contenido
    return valor
}
*/

//Invocacion
miFuncion(2,3)
//nombre (argumentos)
//-------------------------------------------------------------------------------------------
//La invocacion sirve para emplear una funcion con diferentes argumentos
//y guardarlos en una variable.
var resultado1 = suma(2,3)
var resultado2 = suma(4,6)
var resultado3 = suma(10,12)

console.log(resultado1) //5
console.log(resultado2) //10
console.log(resultado3) //22

//--------------------------------------------------------------------------------------

// Estan las funciones de Expresión (FuncionAnonima).

var miFuncion = function(a,b){
    return a + b; 
}

//Resultado de la funcion(De esta forma se llama la funcion).
//Nombre de la variable con parentesis.
miFuncion();

/*-------------------------------------------------------------------------------------------*/


//Declaracion
var suma = function (a, b) {
    return a + b
    
}

//invocacion

var resultado = suma(2, 2)
console.log(resultado);

//-------------------------------------------------------------------------------------
//Undefined.
function saludar(nombre) {
    console.log("Hola " + nombre);
    
}

//Invocaciones
saludar("JavaScript"); //"Hola JavaScript"
saludar("Platzi");  //"Hola Platzi"

//---------------------------------------------------------------------------------------------------

//Ejemplo de funcion declarativa.

function saludarEstudiantes(estudiantes) {
    console.log(estudiantes); 
}

saludarEstudiantes("Sara")

// Algo mas complejo (Poner nombres a la vez).

function saludarEstudiantes(estudiantes) {
    console.log(`Hola ${estudiantes}`); 
}

saludarEstudiantes("Sara.")
saludarEstudiantes("Motas.")
saludarEstudiantes("Thor.")

//Resultado Hola sara.


//-----------------------------------------------------------------------------------------------------------

//Practica

function parametroJavaScript(valores) {
    return typeof valores;
}

parametroJavaScript(1);
parametroJavaScript("Sara");
parametroJavaScript(false);

var primeraFuncion = function(nombre){
    return "Hola " + nombre;
}

primeraFuncion("Sara");










