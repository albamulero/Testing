import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from '../../models/registro';
import { RegistroService } from '../../service/registro.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [RegistroService]
})
export class RegistroComponent implements OnInit {

  public url: string;

  // Aqui guardaremos los datos del formulario
  user = new Registro('', '', '', '', '', '', '')

  constructor(

    private router:Router,
    private _registroService: RegistroService
    

  ) { }

  ngOnInit(): void {
  }

  registrarse() {

    if (this.user.password != this.user.repit_password) {

      alert("Contraseña incorrecta, vuelve a intentarlo")

    } else {

      console.log("El formulario fue enviado : ", this.user)

      this._registroService.addRegistro(this.user).subscribe(

        data => {

          console.log(data);
          this.router.navigate(['area-cursos'])

        }
      )

    }
  }
  
}

