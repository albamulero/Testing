
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


async function ver_seccion_leccion(seccion, leccion){

    let success = false
    let message = ''
    let data, datos_bd


    // Comprobar si tenemos seccion
    if (seccion != null || seccion != ''){


    let data = {accion: 'SELECT',
        tabla: 'academy_teoria_01',
        campos : ['seccion'],
        data : [seccion]
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
                util.ordenarJSON(valor.resultado, 'leccion', 'asc') // En desarrollo
                

        }else{
            success = false
            message = 'Valores no econtrados'
        }


    }else{
        success = false
        message = 'Error paso de parametros'
    }



    return {sucess:success, message:message, data: datos_bd}

}


module.exports = {
    'ver_seccion_leccion': ver_seccion_leccion
}