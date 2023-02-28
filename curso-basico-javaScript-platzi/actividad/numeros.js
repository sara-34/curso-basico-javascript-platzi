let num1;
let num2;
let num3;


function numeroMenor(num1, num2, num3) {

num1 = parseInt(prompt("Ingrese su numero 1:"));
num2 = parseInt(prompt("Ingrese su numero 2:"));
num3 = parseInt(prompt("Ingrese su numero 3:"));



    if (num1 <= num2 && num1 <= num3) {
        return num1

    }
    else if(num2 <= num1 && num2 <= num3){
        return num2

    }
    else if(num3 <= num1 && num3 <= num2){
        return num3 
    }
    else{
        console.log("Ingrese su numero nuevamente")
    }
    
};

numeroMenor();





function promedioArray(miArray) {
    let i = 0;
    let suma = 0;
    let promedio = miArray.length;

    while (i < promedio) {
        suma = suma + miArray[i++];
}
    return suma / promedio;
}

var miArray = [3, 6, 7, 7, 7];
var a = promedioArray(miArray);
console.log(a)






