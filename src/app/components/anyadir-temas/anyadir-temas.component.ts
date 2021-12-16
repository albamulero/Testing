import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { anyadirTemas } from '../../models/anyadir-temas'
import { anyadirTemasService } from '../../service/anyadir-temas.service'

@Component({
  selector: 'app-anyadir-temas',
  templateUrl: './anyadir-temas.component.html',
  styleUrls: ['./anyadir-temas.component.css'],
  providers:[anyadirTemasService]
})
export class AnyadirTemasComponent implements OnInit {

  public url: string

  temas = new anyadirTemas('','','','')

  constructor(

    private router: Router,
    private _anyadirTemasService: anyadirTemasService

  ) { }

  ngOnInit(): void {
  }

  anyadir_temas() {
    
    this._anyadirTemasService.addanyadirTemas(this.temas).subscribe(

      data => {

        console.log("Data", data);

        if (data.success == true) {

          alert("Tema creado correctamente")

        } else {

          alert("Error al crear el tema")
          
        }
        
      }
    )
  }

}
