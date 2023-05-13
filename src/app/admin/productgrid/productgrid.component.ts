import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductgridComponent implements OnInit {
  displayedColumns: string[] = ['Name','Description','Type'];
  products:any;
  constructor(private productService: ProductService) { }
  

  ngOnInit(): void {
this.productService.getProducts().subscribe((data)=>{
this.products = data;

})
  }

}
