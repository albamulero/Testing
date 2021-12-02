import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
/* let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('projectid', this.id);

      this.http.get('http://localhost:63203/api/CallCenter/GetSupport', { headers: headers }) 

--------------------------------------------

let headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('email', 'alba@gmail.com');
        headers.append('password', '1234')
        
        return this._http.get(this.url + 'login', {headers})
*/