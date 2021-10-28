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

// Importacion de archivos propios
const utilidades = require('./utilidades/util')
const usuario_crud = require('./usuarios/crud')

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
 
app.listen(3000, (err)=>{
    if (err){ 
        console.log('Error al levantar el servidor')
    }else{
        console.log('Servidor levantado en el puerto :', PORT)
    }
})


app.get('/', function (req, res) {
    let test = {"status":"Respuesta correcta"}
  res.json(test)
})

// --- ALTA USUARIO ---

app.post('/altaUsuario', async function(req, res, next){

  console.log(req.body)

    // Vamos a comprobar primero que nos llega la información
    if (req.body.email != ""  & req.body.username != "" & req.body.password != "") {

            // Pasar datos al CRUD
         let valor = await usuario_crud.altaUsuario(req.body.email, req.body.username, req.body.password)

        res.json(valor)

    }else{
        // Responder que faltan datos en la peticion
        res.json({'success':false, 'mensaje':'Error en el envio de parametros'})

    }


  })


// -- LOGIN ---

app.post('/login', async function(req, res){

  console.log(req.body)

  // comprobar que nos estan pasando los parametros...
  if (req.body.email != "" & req.body.email != ""){

    let valor = await usuario_crud.login(req.body.email, req.body.password)

    res.json(valor)

  }else{

          // Responder que faltan datos en la peticion
        res.json({'success':false, 'mensaje':'Error en el envio de parametros'})

  }


})







