import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/types';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  products:product[]=[];
  sproducts:product[]=[];
  vproducts:product[]=[];
  fproducts:product[]=[];
  selected="All";
  types=[
    "Civil",
    "Group A",
    "Group B",
    "Defence",
    
  ]
  constructor(private ps:ProductService,public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe( {
     next: (data:product[])=>this.products = data,
     error: ()=> this.products = []
    }
    )
    this.ps.getProducts2("Civil").subscribe(
      {
        next: (data:product[])=>this.fproducts = data,
        error: ()=> this.fproducts = []
       }
   )
   this.ps.getProducts2("Group A").subscribe(
    {
      next: (data:product[])=>this.vproducts = data,
      error: ()=> this.vproducts = []
     }
   )
   
   
   
  }
  changetocontact(){
    this.router.navigate(['contactus'],{relativeTo:this.route});
  }

}
