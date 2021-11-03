//
// Ruteador de las usuarios
//

const express=require("express")
const router=express.Router()

// Importacion de archivos propios
//const utilidades = require('../utilidades/util')
const usuario_crud = require('../usuarios/crud')  


// --- ALTA USUARIO ---

router.post('/altaUsuario', async function(req, res, next){

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

router.post('/login', async function(req, res){

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



module.exports = router

