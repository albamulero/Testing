//
// Ruteador de las lecciones
//

'use strict'

const express=require("express")
const router=express.Router()

// Importar el modelo
const Cursos = require('../database/models/cursos')  // Importamos el modelo


//const database = require('../utilidades/database')

// Importacion de archivos propios
const lecciones_crud = require('../lecciones/crud')  


/**
  Devuelve los cursos

  *@param { seccion: "HTML", *leccion: 1 }
  *!El dato obligatorio es la sección, si se omite la lección se devolvera la lista del nivel HTML si se pasa la seccion se devolver los datos de la leccion 1

*/

router.get('/lista_cursos', async function(req, res){

    let success = false
    let message = ''

    try{
        let valor = await Cursos.findAll()
        res.send(valor)
        }

    catch(e){
          res.send(e)
        }

  })


/**

  Crear nuevo titulo y leccion y leccion (numero, posicion al devolver el array)



*/

router.get('/anadir_cursos', async function(req, res){

      // Vamos a comprobar primero que nos llega la información
    if (req.body.title != "" & req.body.descripcion != "") {

      try{

        await Cursos.create({
            curso_title: req.body.title,
            curso_descripcion: req.body.descripcion
          })

        res.json({'success':true, 'mensaje':'Curso creado correctamente'})

      }
      catch(e){
        
        res.json({'success':false, 'mensaje':'No se pudo crear el curso'})
      } 

    }else{
        // Responder que faltan datos en la peticion
        res.json({'success':false, 'mensaje':'Error en el envio de parametros'})

    }

})



/**

  Crear nuevo titulo y leccion y leccion (numero, posicion al devolver el array)



*/

router.get('/anadir_temas', async function(req, res){

      // Vamos a comprobar primero que nos llega la información
    if (req.body.posicion != "" & req.body.title != "" & req.body.descripcion != "" & req.body.id_curso != "") {

            // Pasar datos al CRUD
         let valor = await lecciones_crud.anadir_temas(req.body.posicion, req.body.title, req.body.descripcion, req.body.id_curso)

        res.json(valor)

    }else{
        // Responder que faltan datos en la peticion
        res.json({'success':false, 'mensaje':'Error en el envio de parametros'})

    }

})

module.exports = router