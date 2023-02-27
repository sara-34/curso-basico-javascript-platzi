var estudiantes = ["maria", "sergio", "Rosa", "daniel"];
function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
    
}

while (estudiantes.length > 0) {
    console.log(estudiante);
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
    
}
