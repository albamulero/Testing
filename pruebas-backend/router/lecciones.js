//
// Ruteador de las lecciones
//

const express=require("express")
const router=express.Router()



router.get('/lecciones', async function(req, res){

  console.log(req.body) 



})


/**
 Incluimos el ruteador para las lecciones
 Debemos de recibir un json con la siguiente estrucutar

  *@param { seccion: "HTML", *leccion: 1 }
  *!El dato obligatorio es la sección, si se omite la lección se devolvera la lista del nivel HTML si se pasa la seccion se devolver los datos de la leccion 1

*/

router.get('/leccion', async function(req, res){



    let success = false
    let message = ''

    // Comprobar si el primer parametro esta llegando
    if (req.body.seccion == '' || req.body.seccion == null ){
        success = false
        message = "Error en el paso de parametros"

    }else{

        /**

          ** Seleccionar el camino que vamos a seguir
          

        */

      if(req.body.leccion == '' | req.body.leccion == null){
          message = "Se devolvera todos los titulos de la seccion " + req.body.seccion
      }else{
          message = "Se devolvera la seccion : " + req.body.seccion + " y los subtitulos de la leccion " + req.body.leccion
      }


    }

    //console.log(req)

    console.log(req.body.seccion)
    console.log(req.body.leccion), 


   res.json({succes:success, message: message})



  })


/**

  Crear nuevo titulo y leccion y leccion (numero, posicion al devolver el array)



*/

router.get('/teoria_anadir_titulo_seccion', async function(req, res){

  res.json('En desarrollo')

})

module.exports = router