const db = require('./config_db')
const mysql = require('mysql')
const util = require('util')


const anadir_registros = async (args, callback) => {

    // Datos que tenemos que leer de JSON que se pasa
    // Accion, INSERT, UPDATE, DELETED
    // campo : "data"
    // where : "data"
    // database : "database" -> no en esta version
    // tabla: "tabla"

    let database = ''
    let tabla = 'academy_usuarios'

    // Construccion de la sentencia SQL

    let sql = 'INSERT INTO '

    // Añadir la tabla
    sql = sql.concat(tabla)


    sql = sql.concat(' ( ')

    sql = sql.concat(args.campos)

    sql = sql.concat(' ) ')

    sql = sql.concat(' VALUES (')

    for (let n=0; n < args.data.length; n++ ){
        sql = sql.concat("'" + args.data[n] + "'")
        if (n < args.data.length - 1){sql = sql.concat(", ")}  // Añade la  , entre los campos
        }
       

    sql = sql.concat(' )')

    // Crear la conexion a la 

   const conexion = mysql.createConnection(db.database)
    const query = util.promisify(conexion.query).bind(conexion) 

    let success = false
    let message = ''

    try {

        //console.log(sql)
        let result = await query(sql)

        success = true
        mensaje = 'Lineas afectadas ' + result.affectedRows



    }catch (err) {
        success = false
        mensaje = err.sqlMessage



    }finally{

        conexion.end()

        let devolucion = {'success': success, 'mensaje':mensaje}

        callback(devolucion)
    }

}


/*

parametro = {accion: 'INSERT',
            tabla: 'academy_usuarios',
            campos : ['id', 'correo_electronico', 'username', 'password'],
            data : ['06_idid999iid', '06_cmulero83@icldoud.com', 'cmulero83', '1234']
            }

anadir_registros(parametro, function(data){
    console.log('Linea 88' + data.success + " || " + data.mensaje )

})
*/




module.exports = {
    'anadir_registros': anadir_registros
}