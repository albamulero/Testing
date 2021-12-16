import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global'

@Injectable()
export class AreaTemasService {

    public url: string

    constructor(

        private _http: HttpClient

    ) {

        this.url = Global.url

    }

    getAreaTemas(): Observable<any> {

        console.log('getAreaTemas' + this.url + 'lista_temas');
        return this._http.get(this.url + 'lista_temas')

    }

}