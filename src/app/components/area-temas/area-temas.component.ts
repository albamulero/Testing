import { Component, OnInit } from '@angular/core';
/* import { AreaTemas } from '../../models/area-temas'
import { AreaTemasService } from '../../service/area-temas.service' */

@Component({
  selector: 'app-area-temas',
  templateUrl: './area-temas.component.html',
  styleUrls: ['./area-temas.component.css']/* ,
  providers: [AreaTemasComponent] */
})
export class AreaTemasComponent implements OnInit {

  public url: string
  /* public lista_temas: AreaTemas[] */

  constructor(

    /* private _areaTemasService: AreaTemasService */

  ) { }

  ngOnInit(): void {

    /* this._areaTemasService.getAreaTemas().subscribe(
      
      response => {

        if(response) {

          this.lista_temas = response
          console.log(this.lista_temas);

        }
      },

      err => {

        console.log();
        
      }
    ) */
  }

}
