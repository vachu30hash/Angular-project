import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute,Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input () user:any;

  constructor(private dialog:MatDialog, private ps:ProductService, public router:Router, public route:ActivatedRoute) { }

  ngOnInit(): void {
  
    this.getProducts()
  }
     getProducts(){
      this.ps.getProducts().subscribe({
        next:(res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator= this.paginator;
        },
        error:
        console.log
      })
     }
  openProductForm(){
    const dialogRef = this.dialog.open(AddproductComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val)
        {
          this.getProducts();
        }
      }
    })
    
  }
}
