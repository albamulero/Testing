import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor() { 

    this.user = {
      nombre: '',
      apellido: '',
      email: '',
      password1: '',
      password2: '',
      edad: ''

    }

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("funcion onSubmit");
    console.log(this.user);
    
  }
}