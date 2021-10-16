// Con esta funcion genero letrar aleatoria

// Genera una cadena aleatoria alfanumerica de 10
let validator = require("email-validator");


function makeid() {         

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 10; i++) {

        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}





// Esta funcion indica si un correo es correcto sintacticamente...

function validarEmail(valor) {

    return validator.validate(valor)

}


module.exports = {
    'makeid': makeid,
    'validarEmail':validarEmail
}

