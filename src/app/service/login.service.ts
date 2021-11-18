import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login'
import { Global } from './global'

@Injectable()
export class LoginService {

    public url: string

    constructor(

        private _http: HttpClient

    ) {

        this.url = Global.url

    }

    addLogin(login:Login):Observable<any> {

        const headers = {'content-type':'application/json'}
        const body = JSON.stringify(login)
        console.log("Body: ", body);
        
        return this._http.post(this.url + 'login', body, {'headers': headers})
    }

}