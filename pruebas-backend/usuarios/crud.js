

const util = require('util')
const mysql = require('mysql')   // Cargar el modulo de manejo de la base de datos...
const utilidades = require('../utilidades/util')  // Utilidades


const database = require('../utilidades/database')


// Configuración del sistema de encryptacion
const bcrypt = require('bcrypt');
const saltRounds = 15;

/////////////////////////
// CRUD ALTA USUARIOS //
///////////////////////

async function altaUsuario (email, username, password){

    let message
    

    // Comprobamos que tenemos todos los datos

    if (email == null || username == null || password == null){
        message = 'Error'

    }else{

        // Comprobar que la contraseña cumple
        let re = new RegExp(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*([^\w\s]|[_]))\S{8,}$/gmu)
        let match = re.test(email)
        console.log('Validar correo : ' + match)

        console.log('Correo electronico linea 35...: ' + email)


        //Encriptamos la contraseña...
        const hash = bcrypt.hashSync(password, saltRounds);

       // console.log('Nueva contraseña a guardar' + hash)

        // Comprobar la contraseña
        //const match = await bcrypt.compare(password, hash);
    
        // Crear un id
        let id = utilidades.makeid()
        console.log(id)

        // Crear la instruccion para alta....

        let data = {accion: 'INSERT',
            tabla: 'academy_usuarios',
            campos : ['id', 'correo_electronico', 'username', 'password'],
            data : [id, email, username, hash]
            }

        let valor = database.anadir_registros(data)
        let result = await valor

        return result



    }




}


/////////////////////////
// CRUD BAJA USUARIOS //
///////////////////////

async function bajaUsuario (email, username, password){

  null

}


/////////////////////////
// CRUD LOGIN USUARIOS //
///////////////////////

async function login (email, username, password){

  null

}


module.exports = {
    'altaUsuario': altaUsuario,
    'bajaUsuario': bajaUsuario,
    'login' : login
}







