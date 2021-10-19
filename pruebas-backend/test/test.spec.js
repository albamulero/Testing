const { makeid, validarEmail } = require('../utilidades/util')
const {anadir_registros, borrar_registros} = require('../utilidades/database') 

//---------
// Test del archivo de la carpeta utilidades database.js
//--------------------------------------------


//-------- Añade un registro al la base de datos.....
describe("anadir_registros Sirve para añdir registros a una tabla dela base de datos", function(){

    // Vamos a dar de alta un registro en la tabla academy_usuarios
    // Vamos a dar de alta un usuario valido
    // Luego lo vamos a volver a intentar dar de alta para obtener un error
    // Y luego lo vamos a borrar y vamos a comprobar lo mismo
    // primero debe de borrar y luego tendremos un error


    it('Debe de devolver true en la alta del usuario', function(){

        parametro = {accion: 'INSERT',
            tabla: 'academy_usuarios',
            campos : ['id', 'correo_electronico', 'username', 'password'],
            data : ['07_idid999iid', '07_cmulero83@icldoud.com', 'cmulero83', '1234']
            }

            anadir_registros(parametro, function(data){
                expect(data.succes).toBe(true)
            } )

            // Volvemos a intentarlo y como ya esta creado debe de devolver false
             anadir_registros(parametro, function(data){
                expect(data.succes).toBe(false)
            } )

        // Borramos el registro que acabamos de crear y debe de dar true ya que existe

        parametro = {accion: 'BORRAR',
            tabla: 'academy_usuarios',
            campos : ['id'],
            data : ['07_idid999iid']
            }

            borrar_registros(parametro, function(data){
                expect(data.succes).toBe(true)
            })

        // Ahora lo volvemos a borrar, como ya no existe debe de darnos false
            borrar_registros(parametro, function(data){
                expect(data.succes).toBe(false)
            })

    })

 })




//-----------
// Test del archivo de archivo util.js del directorio utilidades
//-------------------


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

