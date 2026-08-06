import { Component, inject, signal } from '@angular/core';
import { SuppliersService } from '../../../core/services/suppliers/suppliers=Service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-supplier',
  imports: [ReactiveFormsModule],
  templateUrl: './add-supplier.html',
  styleUrl: './add-supplier.css',
})
export class AddSupplier {
  //#region declare
  _SuppService=inject(SuppliersService)
  //#endregion

  //#region forms
  SupForm : FormGroup = new FormGroup({
    code: new FormControl(null),
    name: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    email: new FormControl(''),
    address: new FormControl('',[Validators.required]),
    notes: new FormControl(),
  })
  //#endregion

  //#region callApi
  addNow(){
    if(this.SupForm.valid){
      this._SuppService.addSulier(this.SupForm.value).subscribe({
        next:res=>{
          console.log(res);
          this.showMessage( res.message,'success')
          this.SupForm.reset()
          
        },error:err=>{
          console.log(err);
          this.showMessage( err.message,'error')
          this.SupForm.reset()
          
        }
      })
    }
  }

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


}
