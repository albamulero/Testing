import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global'

@Injectable()
export class AreaCursosService {

    public url: string

    constructor(

        private _http: HttpClient

    ) {

        this.url = Global.url

    }

    getAreaCursos(): Observable<any> {

        console.log('getAreaCursos' + this.url + 'lista_cursos');
        return this._http.get(this.url + 'lista_cursos')

    }

}