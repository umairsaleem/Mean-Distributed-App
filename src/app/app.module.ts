import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { Data2Service } from './data2.service';
import {RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { RejisterComponent } from '../app/rejister/rejister.component';


const appRoutes: Routes =  [
  {path:'', component: AppComponent},
  {path:'home', component: HomeComponent},
  {path:'rejister', component: RejisterComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RejisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService,Data2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
