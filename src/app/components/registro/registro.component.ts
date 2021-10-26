import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user: any;

  constructor() { 

    this.user = {

      nombre: '',
      apellido: '',
      username: '',
      email: '',
      password: '',
      password2: '',
      edad: ''

    }
    
  }

  ngOnInit(): void {
  }

  registrarse() {

    /* Primero comprobamos que las contraseñas sean iguales */
    
    if(this.user.password != this.user.password2) {

      console.log("La contraseña es incorrecta - linea 42");

    } else {

      console.log("La contraseña es correcta - linea 46");

      const data = JSON.stringify(this.user )
      
      jQuery.ajax({

        url: 'http://localhost:3000/altausuario',
        data:data,
        type: 'POST',
        dataType:'json'

      }).then(function (response) {
                
        console.log(response);
                    
      }).catch(function (err){
              
        console.log("hubo un error");

      })
      
    }
  } 
}

