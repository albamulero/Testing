//
// Pruebas del backend
//
//

const utilidades = require('./utilidades/util')
const express = require('express')
const cors = require('cors')
const usuario_crud = require('./usuarios/crud')



const app = express()
app.use(cors())   // Habilitarmos CORS

const PORT = 3000
 
app.use(express.json())    // Confguramos para tratar json
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
    if (req.body.email != null  & req.body.username != null & req.body.password != null) {

            // Pasar datos al CRUD
         let valor = await usuario_crud.altaUsuario(req.body.email, req.body.username, req.body.password)
        // console.log(valor)
        res.json(valor)

    }else{
        // Responder que faltan datos en la peticion
        res.json({'success':false, 'mensaje':'Error en el envio de parametros'})

    }


  })


// -- LOGIN ---

app.post('/login', async function(req, res){

  res.json({'success':false, 'mensaje':'Funcion no operativa'})

})







