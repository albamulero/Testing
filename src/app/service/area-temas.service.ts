import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { ActivatedRoute } from '@angular/router';
import { AreaTemas } from '../models/area-temas';

@Injectable()
export class AreaTemasService {

    public url: string

    constructor(

        private _http: HttpClient,
        private _route: ActivatedRoute,

    ) {

        this.url = Global.url
        
    }

    getAreaTemas(areaTemas:AreaTemas):Observable<any> {

        const headers = {'content-type':'application/json'}
        const body = JSON.stringify({"id_curso":areaTemas})
        console.log("Body: ", body);
        
        return this._http.post(this.url + 'lista_temas', body, {'headers': headers})
           
    }

    
}