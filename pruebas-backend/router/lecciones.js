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
 Incluimos el ruteador para las lecciones
 Debemos de recibir un json con la siguiente estrucutar

  *@param { seccion: "HTML", *leccion: 1 }
  *!El dato obligatorio es la sección, si se omite la lección se devolvera la lista del nivel HTML si se pasa la seccion se devolver los datos de la leccion 1

*/

router.get('/leccion', async function(req, res){

    let success = false
    let message = ''
    let valor

    // Comprobar si el primer parametro esta llegando
    if (req.body.seccion == '' || req.body.seccion == null ){

        // Construir mensajes de devolucion
        success = false
        message = "Error en el paso de parametros"

    }else{

      valor = await lecciones_crud.ver_seccion_leccion(req.body.seccion, req.body.leccion)
  
  console.log('41')  
    console.log(valor)

    }

   res.json(valor)



  })


/**

  Crear nuevo titulo y leccion y leccion (numero, posicion al devolver el array)



*/

router.get('/teoria_anadir_titulo_seccion', async function(req, res){

  res.json('En desarrollo')

})

module.exports = router