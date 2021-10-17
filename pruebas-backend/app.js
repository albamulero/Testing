//
// Pruebas del backend
//
//

const utilidades = require('./utilidades/util')
const express = require('express')
const database = require('./utilidades/database')



const app = express()


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

app.post('/altaUsuario', function(req, res, next){

    // Vamos a comprobar primero que nos llega la información
    if (req.body.email != null  & req.body.username != null & req.body.password != null) {
        console.log('todos los datos correctos')
    } 

    console.log(req.body.email)
    console.log(req.body.username)
    console.log(req.body.password)

    console.log(utilidades.validarEmail(req.body.email))

    // Crear un id
    let id = utilidades.makeid()
    console.log(id)

    // Crear la solicitud para añadir registros a la base de datos
    let data = {accion: 'INSERT',
            tabla: 'academy_usuarios',
            campos : ['id', 'correo_electronico', 'username', 'password'],
            data : [id, req.body.email, req.body.username, req.body.password]
            }

    database.anadir_registros(data, function(valor){
    
      console.log(JSON.stringify(valor));
      return  res.json(valor)

    })



  })







