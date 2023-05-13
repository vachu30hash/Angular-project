import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
}]


@NgModule({
  declarations: [
    HomeComponent,
    AddproductComponent,
    ProductgridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
