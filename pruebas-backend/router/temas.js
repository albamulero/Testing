

'use strict'

const express=require("express")
const router=express.Router()

// Importar el modelo
const Temas = require('../database/models/temas')


/**

  Crear nuevo titulo y leccion y leccion (numero, posicion al devolver el array)



*/


router.post('/anadir_temas', async function(req, res){

      // Vamos a comprobar primero que nos llega la información
    if (req.body.posicion != "" & req.body.title != "" & req.body.descripcion != "" & req.body.id_curso != "") {

        
        try{
                let valor = await Temas.create({tema_orden:req.body.posicion, tema_title:req.body.title, tema_descripcion:req.body.descripcion, id_curso: req.body.id_curso})
                res.json({'success':true, 'mensaje':'tema creado correctamente'})
            }

        catch(e){
                res.json({'success':false, 'mensaje':'No se pudo crear el tema'})
            }



    }else{
        // Responder que faltan datos en la peticion
        res.json({'success':false, 'mensaje':'Error en el envio de parametros'})

    }

})




router.post('/lista_temas', async function(req, res){

    let success = false
    let message = ''

    try{
        let valor = await Temas.findAll({where:{ id_curso: req.body.id_curso}})
        res.send(valor)
        }

    catch(e){
          res.send(e)
        }

  })

module.exports = router