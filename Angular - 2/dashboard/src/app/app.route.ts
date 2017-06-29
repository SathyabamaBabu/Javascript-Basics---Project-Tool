import { Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ProjectAddComponent} from './projects/app.projects-add.component'
import {ProjectListComponent} from './projects/app.projects-list-component'


const routes:Routes= [
    {
        path:'addprojects',
        component:ProjectAddComponent
    },
    {
        path:'listprojects',
        component:ProjectListComponent
    },
    {
        path:'',
        component:ProjectListComponent
    }
];
export const appRouterModule=RouterModule.forRoot(routes);
