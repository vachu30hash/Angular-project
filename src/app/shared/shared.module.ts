import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { MaterialModule } from '../material/material.module';


import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MenuOutlineComponent,

    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:[MenuOutlineComponent,
    ]
})
export class SharedModule { }
