//-----------
// Test del archivo de archivo util.js del directorio utilidades
//-------------------

const { makeid, validarEmail } = require('../utilidades/util')
//const util = require('../utilidades/util')

describe("Makeid genera un valor afanumerido de 10", function() {

    it('Debe de devolver una cadena alfanumerica de 10', function(){
        let valor = makeid()
        expect(valor.length).toBe(10)
    })

})


//
// Comprobar el modulo de validacion de email
//

describe('Validacion correo electronico correto', function(){

    it('Debe de devolver true',function(){
        let valor = validarEmail('cmulero83@icloud.com')
        expect(valor).toBe(true)
    })

    it('Debe de devolver false',function(){
        let valor = validarEmail('cmulero83@icloudcom')
        expect(valor).toBe(false)
    })

    it('Debe de devolver false',function(){
        let valor = validarEmail('cmulero83icloud.com')
        expect(valor).toBe(false)
    })

})

