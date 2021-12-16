import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { anyadirCursos } from '../../models/anyadir-cursos'
import { anyadirCursosService } from '../../service/anyadir-cursos.service'

@Component({
  selector: 'app-anyadir-cursos',
  templateUrl: './anyadir-cursos.component.html',
  styleUrls: ['./anyadir-cursos.component.css'],
  providers: [anyadirCursosService]
})
export class AnyadirCursosComponent implements OnInit {

  public url: string

  // Guardamos los datos del formulario

  cursos = new anyadirCursos('','')

  constructor(

    private router: Router,
    private _anyadirCursosService:anyadirCursosService

  ) { }

  ngOnInit(): void {
  }

  anyadir_cursos() {
    
    this._anyadirCursosService.addanyadirCursos(this.cursos).subscribe(

      data => {

        console.log("Data", data);

        if (data.success == true) {

          alert("Curso creado correctamente")

          // Ruteamos

          this.router.navigate(['area-cursos'])
        
        } else {

          alert("Error al crear el curso")
        }
        
      }
    )
  }

}
