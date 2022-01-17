import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AreaTemas } from '../../models/area-temas'
import { AreaTemasService } from '../../service/area-temas.service'

@Component({
  selector: 'app-area-temas',
  templateUrl: './area-temas.component.html',
  styleUrls: ['./area-temas.component.css'],
  providers: [AreaTemasService]
})
export class AreaTemasComponent implements OnInit {

  public url: string
  public lista_temas: AreaTemas[]
  public parametro: any

  constructor(

    private _route: ActivatedRoute,
    private _router: Router,
    private _areaTemasService: AreaTemasService 

  ) { }

  ngOnInit(): void {
    
    console.log('Linea 27 inicia el ngOnInit');
    

    this._route.params.subscribe((params:Params) => {
      console.log('Linea 31 recogemos el parametro', params);
      
      this.parametro = params.id_curso
  
    })
    
    this._areaTemasService.getAreaTemas(this.parametro).subscribe(
      
      response => {

        if(response) {

          this.lista_temas = response
          console.log('Linea 40', this.lista_temas);
          
        }
      },

      err => {

        console.log('ERROR', err);
        
      }
    )

  }

}
