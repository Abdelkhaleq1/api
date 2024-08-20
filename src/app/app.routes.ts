import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import path from 'path';

export const routes: Routes = [
    {path:'', redirectTo:'home' , pathMatch: 'full'},
    {path:'home',component:HomeComponent},
    
   
];
