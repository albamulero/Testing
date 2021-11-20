//
// Ruteador de las usuarios
//

const express=require("express")
const router=express.Router()

// Importar el modelo
const User = require('../database/models/User')  // Importamos el modelo

// Configuración del sistema de encryptacion
const bcrypt = require('bcrypt');
const saltRounds = 15;

// --- ALTA USUARIO ---

router.post('/altaUsuario', async function(req, res, next){

    // Vamos a comprobar primero que nos llega la información
    if (req.body.email != ""  & req.body.username != "" & req.body.password != "") {

  
      //Encriptamos la contraseña...
        const hash = bcrypt.hashSync(req.body.password, saltRounds);

      try{

        await User.create({
            correo_electronico: req.body.email,
            username: req.body.username,
            password: hash
          })

        res.json({'success':true, 'mensaje':'Usuario creado correctamente'})

      }
      catch(e){
        
        res.json({'success':false, 'mensaje':'No se pudo crear el usuario'})
      }      


    }else{
        // Responder que faltan datos en la peticion
        res.json({'success':false, 'mensaje':'Error en el envio de parametros'})

    }


  })


// -- LOGIN ---

router.get('/login', async function(req, res){

  // comprobar que nos estan pasando los parametros...
  if (req.body.email != "" & req.body.email != ""){


    let valor = await User.findOne({where: {correo_electronico: req.body.email}})

    if (valor == null){
      res.json({'success':false, 'mensaje':'No se encontro el usuario'})
    }else{

     // Comprobamos que la conraseña que nos viene es la correcta
      if (await bcrypt.compare(req.body.password, valor.password)){

          res.json({'success':true, 'mensaje':'Usuario encontrado'})
      }else{

          res.json({'success':false, 'mensaje':'Contraseña erronea'})
          }
      
    }

  }else{

          // Responder que faltan datos en la peticion
        res.json({'success':false, 'mensaje':'Error en el envio de parametros'})

  }


})

module.exports = router

