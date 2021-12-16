import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { anyadirCursos } from '../models/anyadir-cursos'
import { Global } from './global'

@Injectable()
export class anyadirCursosService {

    public url: string

    constructor(

        private _http: HttpClient

    ) {

        this.url = Global.url

    }

    addanyadirCursos(cursos:anyadirCursos):Observable<any> {

        const headers = {'content-type':'application/json'}
        const body = JSON.stringify(cursos)
        console.log("Body: ", body);  
        
        return this._http.post(this.url + 'anadir_cursos', body, {'headers': headers})
    }

}