import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { purchesServices } from '../../../core/services/purches/purcheService';
import { PurcgesReq } from '../../../core/interfaces/purches/purches';
import { Toaster } from '../../../shared/addtions/toaster/toaster';

@Component({
  selector: 'app-all-purches',
  imports: [Toaster , ReactiveFormsModule],
  templateUrl: './all-purches.html',
  styleUrl: './all-purches.css',
})
export class AllPurches {
  @ViewChild(Toaster)
  toast!: Toaster;
  _purcheService = inject(purchesServices)
  fb = inject(FormBuilder)

  purchaseForm = this.fb.group({
  purchaseNumber: [''],
  supplierName: [''],
  purchaseDate: [''],
  notes: [''],

  items: this.fb.group({
    itemName: [''],
    type: [''],
    quantity: [0],
    unitPrice: [0]
  })
});

addPurches(){
  const formValue = this.purchaseForm.getRawValue();
  const payload = {
    ...formValue, 
    items:[formValue.items]
  };

  if(this.purchaseForm.valid){
   this._purcheService.addPurReq(payload as PurcgesReq).subscribe({
    next:res=>{
  console.log(res);
  this.toast.show(res.message , 'success')
    },
    error:err=>{
  console.log(err);
  this.toast.show('added error' , 'error')
    }
   })
  }
}

}
