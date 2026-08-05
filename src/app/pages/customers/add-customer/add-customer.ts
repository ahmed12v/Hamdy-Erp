import { Component, inject, signal } from "@angular/core";
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { CustomerService } from "../../../core/services/customers/customer";
import { customerFormReq } from "../../../core/interfaces/customer/customer";

@Component({
  selector: "app-add-customer",
  imports: [ReactiveFormsModule],
  templateUrl: "./add-customer.html",
  styleUrl: "./add-customer.css",
})
export class AddCustomer {
  private _customerService = inject(CustomerService);
  private fb = inject(FormBuilder);
 generateCustomerCode(): string {
  return 'C' + Math.floor(100000 + Math.random() * 900000);
}
  addForm = this.fb.group({
    
    name: ["", [Validators.required, Validators.minLength(3)]],
    code: [null],
    phone: ["",[Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)], ],
    email: ["", [Validators.email]],
    address: ["", [Validators.minLength(5)]],
    notes: [""],
    
  });

  addCustomerNow() {
    console.log(this.addForm.value);

    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }

    

    this._customerService.addCustomer(this.addForm.value as customerFormReq).subscribe({
      next: (res) => {
        
        console.log(res);
         this.showMessage(
         res.message,
        'success'
 );
 this.addForm.reset();
 
      },

      error: (err) => {
        console.log(err);
         this.showMessage(
   err.message,
   'error'
 );
      },
    });
  }
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
}
