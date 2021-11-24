import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro'
import { Global } from './global'

@Injectable()
export class RegistroService {

    public url: string;

    constructor(

        private _http: HttpClient
    
    ) { 

        this.url = Global.url
    }

    addRegistro(user:Registro):Observable<any> {

        const headers = {'content-type':'application/json'}
        const body = JSON.stringify(user)
        console.log("Body: ", body);
        
        return this._http.post(this.url + 'altaUsuario', body, {'headers': headers})
    }

}