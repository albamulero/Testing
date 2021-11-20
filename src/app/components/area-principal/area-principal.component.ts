import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-area-principal',
  templateUrl: './area-principal.component.html',
  styleUrls: ['./area-principal.component.css']
})
export class AreaPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listado_cursos() {

    console.log("Funcion ejercicios JS")
    
    jQuery.ajax({
      
      cache: false,
      url: "http://localhost:3000/lista_cursos"
  
    }).then(function(response) {

      /* Comprobamos si hay curso */

      if(response.sucess == true) {

        console.log("Los cursos disponibles son estos: ", response);

        /* Recoremos los cursos */
      
        for(let i = 0; i < response.data.length; i++) {

          console.log(response.data[i].curso_title);

        }
        
      }else {

        console.log("No ahi cursos disponibles ahora, intentelo mas tarde");

      }
  
    }).catch(function(err) {
  
      console.log(err);
      
    })
     
  }

}
