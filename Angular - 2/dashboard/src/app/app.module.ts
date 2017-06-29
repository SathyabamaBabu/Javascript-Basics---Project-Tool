import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProjectListComponent } from './projects/app.projects-list-component';
import {ProjectAddComponent } from './projects/app.projects-add.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';
import {appRouterModule} from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectAddComponent
    
  ],
  imports: [
    appRouterModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    DataTableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
