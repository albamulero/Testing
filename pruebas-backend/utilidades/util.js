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

// Estaf uncion ordena un json siguiendo los siguientes parametros
// data : objeto json
// key : campo por el que se ordena
// orden : 'asc' - 'desc'

function ordenarJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}


module.exports = {
    'makeid': makeid,
    'validarEmail': validarEmail,
    'ordenarJSON' : ordenarJSON
}

