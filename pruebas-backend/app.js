//
// Pruebas del backend
//
//
'use strict'

// Utilidades del servidor
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser') // Nos permite configurar cookies dentro de nuestro servidor
const session = require('express-session');  // Nos permite tener sessiones...

const sequelize = require('./database/db')    // Conexión para sequalize

// importar los archivos del ruteador
const user = require('./router/user')   // Maneja todos lo referente  los usuaruos
const lecciones = require('./router/cursos')   // Maneja todo lo referente a los cursos
const temas = require('./router/temas')  // Maneja todo lo referente a los temas

const PORT = 3000  // Puerto por donde vamos a ejecutar el servidor

const app = express() // Creamos el servidor

app.use(cors())   // Habilitarmos CORS
app.use(cookieParser());  // Activar las cookies dentro del servidor...
app.use(bodyParser.urlencoded({ extended: false }))  // Activamos que se reciban por las peticiones por req.body
app.use(bodyParser.json())

// Activar el middelware de gestion de sesiones del servidor
app.use(session({
    secret: 'kdikeilsok8f88f8f888kjkjas',
    resave: false,
    saveUninitialized: true
}))


app.use(express.static('public'))   // Ruta para paginas estaticas

// Manejo de rutas request
app.use("/", user)
app.use("/", lecciones)
app.use("/", temas)

 
app.listen(3000, (err)=>{
    if (err){ 
        console.log('Error al levantar el servidor')
    }else{
        console.log('Servidor levantado en el puerto :', PORT)


     // Conectarse al a base de datos
    // Si usamos authenticate(), sequalize no va a crear las tablas automaticametne
    // Si usamos sync({force:false}), sequalize va a crear automaticamente las tablas
    // Si usamos sync({force:trye}), sequalize hace un DROP TABLES

    sequelize.sync({force:false}).then(()=> {
        console.log("Conexion correcta a la BBDD")
    }).catch(error => {
            console.log("Error en la conexion a la base de datos")
        }
    
    )
    

    }
})






