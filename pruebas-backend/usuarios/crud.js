

const util = require('util')
const mysql = require('mysql')   // Cargar el modulo de manejo de la base de datos...
const utilidades = require('../utilidades/util')  // Utilidades


// Configuracion de la conexion a la base de datos
const db_info = require('../utilidades/config_db')  // Datos de configuracion de la BBDD
const db_conexion = mysql.createConnection({db_info})





/////////////////////////
// CRUD ALTA USUARIOS //
///////////////////////

async function altaUsuario (email, username, password){

    //node native promisify
    const query = util.promisify(db_info.query).bind(db_conexion)

}


