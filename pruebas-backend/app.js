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

// importar los archivos del ruteador
const user = require('./router/user')
const lecciones = require('./router/lecciones')

// Importacion de archivos propios
const utilidades = require('./utilidades/util')
const usuario_crud = require('./usuarios/crud')   // Maneja el crud de los usuarios

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
app.use("/", lecciones)
app.use("/", user)
 
app.listen(3000, (err)=>{
    if (err){ 
        console.log('Error al levantar el servidor')
    }else{
        console.log('Servidor levantado en el puerto :', PORT)
    }
})






