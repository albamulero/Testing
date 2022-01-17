import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class AreaTemasService {

    public url: string
    public parametro: string

    constructor(

        private _http: HttpClient

    ) {

        this.url = Global.url
        
    }

    getAreaTemas(id_curso:any): Observable<any> {

        console.log('getAreaTemas' + this.url + 'lista_temas' + '/' + id_curso);
        return this._http.get(this.url + 'lista_temas' + '/' + id_curso)

    }

    
}