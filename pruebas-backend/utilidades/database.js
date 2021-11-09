const db = require('./config_db')
const mysql = require('mysql')
const util = require('util')
const { consoleTestResultHandler } = require('tslint/lib/test')


const anadir_registros = async (args) => {

    // Datos que tenemos que leer de JSON que se pasa
    // Accion, INSERT, UPDATE, DELETED
    // campo : "data"
    // where : "data"
    // database : "database" -> no en esta version
    // tabla: "tabla"

    let database = ''
    let tabla = args.tabla

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

        console.log('Sentencia SQL que vamos a ejecutar...: ' + sql)
        let result = await query(sql)

        success = true
        mensaje = 'Lineas afectadas ' + result.affectedRows



    }catch (err) {
        success = false
        mensaje = err.sqlMessage



    }finally{

        conexion.end()

        let devolucion = {'success': success, 'mensaje':mensaje}

        return devolucion
    }

}


const borrar_registros = async (args) => {

    // Datos que tenemos que leer de JSON que se pasa
    // campo : "data"
    // where : "data"
    // database : "database" -> no en esta version
    // tabla: "tabla"
    // Ejemplo {'accion': 'DELETE', tabla: 'academy_usuarios', campos : ['id'], data ['06_idid999iid']}

    let database = ''
    let tabla = args.tabla

    // Construccion de la sentencia SQL
// DELETE FROM table_name WHERE condition;
    let sql = 'DELETE FROM ' + tabla + ' WHERE ' + args.campos[0] + ' = "' + args.data[0] + '"'

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

        return devolucion
    }


    


}


//
// Raliza una busqueda en la base de datos y devulve los datos en un array
//

const buscar_registros = async (args) => {

    let tabla = args.tabla

    console.log("buscar_registros linea 143")
    console.log(args.campos.length)



    // Vamos a ver si tenemos campos, si no los tenemos tenemos hacemos un select para que devuelva todo
    if(args.campos.length != 0){


        // Construccion de la sentencia SQL
        sql = 'SELECT * FROM ' + tabla + ' WHERE '


    // Leemos todos los campos y ponemos la variable a comparar
        for (let n=0; n < args.campos.length; n++){

            if (n>0){sql = sql + ' AND '}  // Añade AND para mas de un valor de la consulta


            if (typeof(args.data[n]) == 'string'){

                sql = sql + args.campos[n] +  ' = "' +  args.data[n] + '"'
    
            }else if(typeof(args.data[n]) == 'number'){

                sql = sql + args.campos[n] +  ' = ' +  args.data[n] 

            }

        }

    }else{

        // Construccion de la sentencia SQL
        sql = 'SELECT * FROM ' + tabla

    }

    // Crear la conexion a la 

    const conexion = mysql.createConnection(db.database)
    const query = util.promisify(conexion.query).bind(conexion) 

    let success = false
    let result = ''

    try{

        result = await query(sql)

        if (result == 0){
            success = false
            message = 'No existe el usuario'
        }else{

            success = true 
            message = 'Usuario encontrado'

        }


    }catch (err){

        success = false
        mensaje = err.sqlMessage



    }finally{


        conexion.end()

        let devolucion = {'success': success, 'mensaje':message, 'resultado' : result}

        return devolucion


    }





}







module.exports = {
    'anadir_registros': anadir_registros,
    'borrar_registros': borrar_registros,
    'buscar_registros': buscar_registros
}