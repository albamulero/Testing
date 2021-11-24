import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login'
import { LoginService } from '../../service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public url: string

  // Aqui guardaremos los datos del formulario
  login = new Login('', '')

  constructor(

    private router:Router,
    private _loginService:LoginService

  ) { }

  ngOnInit(): void {
  }

  entrada_principal() {

    this._loginService.addLogin(this.login).subscribe(

      data => {

        console.log(data);

        if (data == false) {

          alert("Contraseña incorrecta, vuelve a intentarlo")

        } else {

          this.router.navigate(['area-cursos'])
        }

      }
    )
  }

}

