
'use strict'

const utilidades = require('../utilidades/util')  // Utilidades
const database = require('../utilidades/database')
const util = require('../utilidades/util')

/**
    Devuelve el titulo de las secciones solicitadas
    Recibimos dos paramentros

    seccion
    leccion


*/


async function lista_cursos(){

    let success = false
    let message = ''
    let data, datos_bd


    data = {accion: 'SELECT',
    tabla: 'curso_cursos',
    campos: ''
    }


    let valor = await database.buscar_registros(data)

        // Si tenemos exito construimos la devolucion
        if (valor.success){

                success = true 
                message = 'Valores encontrados'
                datos_bd = valor.resultado

                console.log('Valor resultado')
                console.log(valor.resultado)

                // Vamos ordenar el JSON
                //util.ordenarJSON(valor.resultado, 'leccion', 'asc') // En desarrollo
                

        }else{
            success = false
            message = 'Valores no econtrados'
        }

    return {sucess:success, message:message, data: datos_bd}

}


//
// Permite añadir nuevos cursos
// Recibe dos parametros (titulo y descripción)
//
async function anadir_cursos( title, descripcion){

    let success = false
    let message = ''
    let data, datos_bd


    data = {accion: 'INSERT',
            tabla: 'curso_cursos',
            campos : ['curso_title', 'curso_descripcion'],
            data : [title, descripcion]
            }

        let valor = await database.anadir_registros(data)

        console.log(valor)
        

        return valor



    


}


module.exports = {
    'lista_cursos': lista_cursos,
    'anadir_cursos': anadir_cursos
}