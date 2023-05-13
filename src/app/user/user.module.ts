import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProductComponent } from './userhome/product/product.component';
import { DetailsComponent } from './userhome/details/details.component';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';

import { MaterialModule } from '../material/material.module';
import { TypefilterPipe } from './pipes/typefilter.pipe';



const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path:"details",
      component: DetailsComponent
    },
    {
      path:"contactus",
      component: ContactusComponent
    }
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    ProductComponent,
    DetailsComponent,
    ContactusComponent,
    TypefilterPipe,
 

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    MaterialModule
  ]
})
export class UserModule { }
