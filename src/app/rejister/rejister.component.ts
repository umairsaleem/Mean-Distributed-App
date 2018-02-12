import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data2Service } from '../data2.service';
@Component({
  selector: 'app-rejister',
  templateUrl: './rejister.component.html',
  styleUrls: ['./rejister.component.css']
})
export class RejisterComponent implements OnInit {

  constructor(private _dataService: DataService,private _data2Service: Data2Service) { }
  name : String;
  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name
     }

     this._dataService.registerUser(user);

}
}
