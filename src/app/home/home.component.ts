import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data2Service } from '../data2.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users1: Array<any>;
  users2: Array<any>;
  name : String;

  constructor(private _dataService: DataService,private _data2Service: Data2Service,private router: Router) {  

  this._dataService.getUsers()
  .subscribe(res => this.users1 = res);

  this._data2Service.getUsers()
  .subscribe(res => this.users2 = res);
}
  ngOnInit(){

}

onRegisterSubmit(){
  const user = {
    name: this.name
   }

   this._dataService.registerUser(user);

}
}


