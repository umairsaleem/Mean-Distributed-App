import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http,private router: Router) { }

  getUsers() {
    
    
    return this._http.get('/api1/users')
    .map(result => this.result = result.json().data);
  }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post('http://localhost:3000/api1/rejister', user,{headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        if(data.success){
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/rejister']);
        }
      });
  }

}
