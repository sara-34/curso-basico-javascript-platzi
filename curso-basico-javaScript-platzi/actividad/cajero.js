let contraseña;
let numeroTarjeta;
let saldoAcomulado;

function validacionUsuario(numeroTarjeta, contraseña) {
    
  if(numeroTarjeta.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }

  if (contraseña.length < 6) {
    alert('La contraseña no es velida');
    return;
  }

}

function login() {
    numeroTarjeta = parseInt(prompt("Ingrese su numero de tarjeta"));
    contraseña = parseInt(prompt("Ingrese su contraseña"));

    return validacionUsuario(numeroTarjeta, contraseña);
    
}

function retirarDinero(valor) {

    if (valor == saldoAcomulado) {
        valor = parseFloat(prompt("Ingrese valor a retirar"))
        return valor;

    }else if (saldoAcomulado > valor) {
        console.log("No se puede retirar el dinero su saldo es:" + saldoAcomulado);
    }
    
}

function consultarSaldo(saldoAcomulado, valor) {
    return saldoAcomulado - valor;
    
}



validacionUsuario();