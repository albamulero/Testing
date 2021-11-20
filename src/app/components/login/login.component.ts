import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public entrada_usuario: any;

  constructor() { 

    /* Sacamos los datos del formulario */

    this.entrada_usuario = {

      email: '',
      password: ''

    }
  }

  ngOnInit(): void {
  }

  login() {

    /* Creamos el data */

    const data = {

      "email": `${this.entrada_usuario.email}`,
      "password" : `${this.entrada_usuario.password}`
      
    }

    /* Hacemos la peticion ajax, para comprobar que el usaurio este en la DB */

    jQuery.ajax({

      url: 'http://localhost:3000/login',
      data: data,
      type: 'POST',
      dataType:'json'

    }).then(function (response) {
                
      console.log(response);
                  
    }).catch(function (err){
              
      console.log(err);

    })

  }
}

