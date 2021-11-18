import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { Global } from 'src/app/service/global'

@Component({
  selector: 'app-area-principal',
  templateUrl: './area-principal.component.html',
  styleUrls: ['./area-principal.component.css']
})
export class AreaPrincipalComponent implements OnInit {

  public url: string;

  constructor() { 

    this.url = Global.url
  }

  ngOnInit(): void {
  }

  listado_cursos() {

    const div = document.createElement('div')

    console.log("Funcion ejercicios JS")
    
    jQuery.ajax({
      
      url: "http://localhost:3000/lista_cursos"
  
    }).then(function(response) {

      /* Comprobamos si hay curso */

      if(response.sucess == true) {

        console.log("Los cursos disponibles son estos: ", response.data);

        /* Recoremos los cursos */
      
        for(let i = 0; i < response.data.length; i++) {

          console.log(response.data[i].curso_title);

          /* Pintamos los cursos en botones */

          const button = document.createElement('button')
          button.innerText = response.data[i].curso_title
          div.appendChild(button) 

        }

        document.body.appendChild(div)
        
      }else {

        console.log("No ahi cursos disponibles ahora, intentelo mas tarde");

      }
  
    }).catch(function(err) {
  
      console.log(err);
      
    })
     
  }

}
