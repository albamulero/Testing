//
// Ruteador de las lecciones
//

'use strict'

const express=require("express")
const router=express.Router()

const database = require('../utilidades/database')

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
    let valor

   

    valor = await lecciones_crud.lista_cursos(req.body.seccion)
  
    console.log('41')  
    console.log(valor)

    res.json(valor)

  })


/**

  Crear nuevo titulo y leccion y leccion (numero, posicion al devolver el array)



*/

router.get('/anadir_cursos', async function(req, res){

      // Vamos a comprobar primero que nos llega la información
    if (req.body.title != "" & req.body.descripcion != "") {

            // Pasar datos al CRUD
         let valor = await lecciones_crud.anadir_cursos(req.body.title, req.body.descripcion)

        res.json(valor)

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