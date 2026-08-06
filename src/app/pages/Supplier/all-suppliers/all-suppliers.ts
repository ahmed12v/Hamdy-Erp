import { Component, inject, OnInit, signal } from '@angular/core';
import { SuppliersService } from '../../../core/services/suppliers/suppliers=Service';
import { supplierRes } from '../../../core/interfaces/suppliers/supppliers';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-suppliers',
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './all-suppliers.html',
  styleUrl: './all-suppliers.css',
})
export class AllSuppliers implements OnInit {
  ngOnInit(): void {
    this.getAllSupplier();
  }
  //#region declare
  _supplierService = inject(SuppliersService);
  allSupplier =signal<supplierRes|null>(null);
  //#endregion

  //#region getAllSupplier
   getAllSupplier(){

    this._supplierService.getAllSuppplier().subscribe({
      next:(res)=>{
        console.log(res);
        this.allSupplier.set(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })

   }
   //#endregion

   //#region deleteApi
    
   deleteSup(id:string){
    this._supplierService.delete(id).subscribe({
      next:res=>{
        console.log(res);
        this.getAllSupplier()
        
      },
      error:err=>{
        console.log(err);
        
      }
    })
   }

   //#endregion

   //#region edit

   showpopoBool=signal(false)
   puplicId = signal<string >('')
   openEdit(supplier:any){
    this.showpopoBool.set(true)
    this.puplicId.set(supplier.publicId)
    console.log(this.puplicId());
     this.editForm.patchValue({
    name: supplier.name,
    phone: supplier.phone,
    email: supplier.email,
    address: supplier.address,
    notes: supplier.notes
  });
    
   }
   closeEdit(){
    this.showpopoBool.set(false)
   }
   //#endregion

     //#region editForm
  editForm : FormGroup = new FormGroup({
    code: new FormControl(null),
    name: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    email: new FormControl(''),
    address: new FormControl('',[Validators.required]),
    notes: new FormControl(),
  })
  //#endregion
  //#region successShow
   show = signal(false);

type:'success' | 'error' = 'success';

message = '';

showMessage(
  message:string,
  type:'success'|'error'
){

  this.message = message;
  this.type = type;
  this.show.set(true);

}


close(){

 this.show.set(false);

}
//#endregion
  //#endregion

  //#region callApi
  editNow(){
    if(this.editForm.valid){
      this._supplierService.editSupplier(this.puplicId(), this.editForm.value).subscribe({
        next:res=>{
               //console.log(res);
               this.getAllSupplier()
               this.showMessage(res.message , 'success')
               this.closeEdit()
               
        },
        error:err=>{
          //console.log(err);
          this.showMessage(err.message , 'error')
          
        }
      })
    }
  }
  //#endregion
}
