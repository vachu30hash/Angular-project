import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductgridComponent } from '../productgrid/productgrid.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productform:FormGroup;

  constructor(private fb:FormBuilder,private ps:ProductService,
  private dialogref:MatDialogRef<ProductgridComponent>,
  @Inject(MAT_DIALOG_DATA) public data :any) { 
    this.productform=this.fb.group({name: '',type:'',description:''})
  }

  ngOnInit(): void {
    this.productform.patchValue(this.data);
  }



  onformsubmit(){
    if(this.productform){

       if(this.data){
      
      this.ps.updateProducts(this.data.id,this.productform.value).subscribe({
      
       next:(val: any)=>{
      
      alert("Products updated successfully");
      
       this.dialogref.close(true);
      
       },
      
      error:(err:any)=>{
      
       console.error(err);
      
       },
      
      });
      
       }
      
      else{
      
      this.ps.addProducts(this.productform.value).subscribe({
      
      next:(val: any)=>{
      
       alert("Products added successfully")
      
       this.dialogref.close(true);
      
      },
      
       error:(err:any)=>{
      
       console.error(err);
      
       },
      
       });
      
      }
      
      }
      
      }
      
      
  }


