import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { anyadirTemas } from '../models/anyadir-temas'
import { Global } from './global'

@Injectable()
export class anyadirTemasService {

    public url: string

    constructor(

        private _http: HttpClient

    ) {

        this.url = Global.url

    }

    addanyadirTemas(temas:anyadirTemas):Observable<any> {

        const headers = {'content-type':'application/json'}
        const body = JSON.stringify(temas)
        console.log("Body: ", body);  
        
        return this._http.post(this.url + 'anadir_temas', body, {'headers': headers})
    }

}