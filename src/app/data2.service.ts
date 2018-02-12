import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data2Service {

  result:any;

  constructor(private _http: Http) { }

  getUsers() {

     let headers = new Headers();
    return this._http.get('http://localhost:3000/api2/users', {headers: headers})
    .map(result => this.result = result.json().data);


  }  }
