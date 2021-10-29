

const util = require('util')
const mysql = require('mysql')   // Cargar el modulo de manejo de la base de datos...
const utilidades = require('../utilidades/util')  // Utilidades


const database = require('../utilidades/database')


// Configuración del sistema de encryptacion
const bcrypt = require('bcrypt');
const { ɵɵresolveBody } = require('@angular/core');
const saltRounds = 15;

/////////////////////////
// CRUD ALTA USUARIOS //
///////////////////////

async function altaUsuario (email, username, password){

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
        //console.log(id)

        // Crear la instruccion para alta....

        let data = {accion: 'INSERT',
            tabla: 'academy_usuarios',
            campos : ['id', 'correo_electronico', 'username', 'password'],
            data : [id, email, username, hash]
            }

        let valor = await database.anadir_registros(data)

        console.log(valor)
        

        return valor



    }




}


/////////////////////////
// CRUD BAJA USUARIOS //
///////////////////////

async function bajaUsuario (email, username, password){

    // Comprobar que tenemos valores validos


  
    return {"success":false, "message":"Funcion en desarrollo"} 

}


/////////////////////////
// CRUD LOGIN USUARIOS //
///////////////////////

async function login (email, password){


    // Vamos a busar el usuario en la base de datos
    // El sistemanos devolvera 3 datos
    // password: que lo comprabaremos con el que nos pasa desencriptandolo
    // id: con el que crearemos la sesion
    // email: para una ultima confirmación


    let data = {accion: 'SELECT',
        tabla: 'academy_usuarios',
        campos : ['correo_electronico'],
        data : [email]
        }

    let valor = await database.buscar_registros(data)

    // Vamos a comprobar si el resultado es positivo, en caso de serlo vamos a comprobar que todos los datos son correctos
    // y luego comparamos la clave

    if(valor.success){

        console.log(valor)

        // Comprobar el correo devuelto sea el que le pasamos y el password
        if (valor.resultado[0].correo_electronico == email & await bcrypt.compare(password, valor.resultado[0].password)){


            resultado = true

        } else{
            resultado = false
        }
    


    }else{

        resultado = false
        
    }




   return resultado

}


module.exports = {
    'altaUsuario': altaUsuario,
    'bajaUsuario': bajaUsuario,
    'login' : login
}







