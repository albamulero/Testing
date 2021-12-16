import { Component, OnInit } from '@angular/core';
import { AreaCursos } from '../../models/area-cursos'
import { AreaCursosService } from '../../service/area-cursos.service'

@Component({
  selector: 'app-area-cursos',
  templateUrl: './area-cursos.component.html',
  styleUrls: ['./area-cursos.component.css'],
  providers: [AreaCursosService]
})
export class AreaCursosComponent implements OnInit {

  public url: string
  public titulo_cursos: AreaCursos[]

  constructor(

    private _areaCursosService: AreaCursosService

  ) { }

  ngOnInit(): void {

    this._areaCursosService.getAreaCursos().subscribe(

      response => {
        
        if(response) {

          this.titulo_cursos = response
          console.log(this.titulo_cursos);
          
        }

      },
      err => {

        console.log(err);

      }
    )
  }

  activarBoton(e){
    
    var curso = e.srcElement.id
    console.log("Curso elegido:", curso);
    
    console.log(e.srcElement.id);
    
  }

}
