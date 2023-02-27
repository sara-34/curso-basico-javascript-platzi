//Ciclos repetitivos.

var estudiantes = ["Sara", "Sofia", "Jhonatan", "Andres"];
function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i])   
}

//Otra opcion

for(var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}

for(var num = 1; num <= 10; num++){
    console.log(i);
}