var jugador1 = "piedra";
var jugador2 = "tijera";
function jugando(jugador1, jugador2) {
    

switch (true) {
    case jugador1 == jugador2:
        console.log("Empate");
        break;

    case jugador1 === "piedra" && jugador2 === "tijera":
        console.log("Gano Jugador1");
        break;

    case jugador1 === "tijera" && jugador2 === "piedra":
        console.log("Gano Jugador2");
        break;

    case jugador1 === "papel" && jugador2 === "piedra":
        console.log("Gano Jugador1");
        break;

    case jugador1 === "piedra" && jugador2 === "papel":
        console.log("Gano Jugador2");
        break;

    case jugador1 === "tiedra" && jugador2 === "papel":
        console.log("Gano Jugador1");
        break;

    case jugador1 === "papel" && jugador2 === "tijera":
        console.log("Gano Jugador2");
        break;



    default:
        console.log("Inicia el juego de nuevo");
        
}
}

jugando("piedra");
jugando("papel");