var jugador1;
var pc;

function jugarPiedraPapelTijera(jugador1, pc) {

    if (jugador1 == "Tijeras" && pc == "Papel") {
        console.log("Gano jugador 1");
    }else if (jugador1 == "papel" && pc == "tijera") {
        console.log("Gano pc");
        
    }else if (jugador1 == "piedra" && pc == "piedra") {
        console.log("Empate");
        
    }else if (jugador1 == "piedra" && pc == "papel") {
        console.log("Gano pc");
    }else if (jugador1 == "papel" && pc == "piedra") {
        console.log("Gano usuario");
    } else{
        console.log("Pediste");
    }
}

 