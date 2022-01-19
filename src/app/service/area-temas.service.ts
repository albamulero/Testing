import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AreaTemasService {

    public url: string

    constructor(

        private _http: HttpClient,
        private _route: ActivatedRoute,

    ) {

        this.url = Global.url
        
    }

    getAreaTemas(id_curso:any): Observable<any> {

        console.log('getAreaTemas' + this.url + 'lista_temas' + '/' + id_curso);
        return this._http.get(this.url + 'lista_temas')

    }

    
}