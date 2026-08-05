import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { CustomerService } from '../../../core/services/customers/customer';
import { AllCustomerss, customerFormReq } from '../../../core/interfaces/customer/customer';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-customers',
  imports: [RouterLink ,ReactiveFormsModule],
  templateUrl: './all-customers.html',
  styleUrl: './all-customers.css',
})
export class AllCustomers implements OnInit{
  ngOnInit(): void {
    this.getAllCustomers()
  }
  //#region declare
  _cusomerService=inject(CustomerService)
  private cdr = inject(ChangeDetectorRef);
  customers = signal<AllCustomerss[]>([]); 
  showEditPopup = signal(false);
  selectedCustomerid: number | null  = null;
//#endregion

  //#region callApi get
  getAllCustomers(){
    this._cusomerService.getAllCustomers().subscribe({
      next:res=>{
        //console.log(res)
        this.customers.set(res)
       //this.customers=res
        //this.cdr.detectChanges();
      },
      error:err=>{
        //console.log(err)
        //this.cdr.detectChanges();
      }
    })
  }
//#endregion

//#region callApi delete
  deleteCustomer(id:number){
    this._cusomerService.deleteCustomer(id).subscribe({
      next:res=>{
        //console.log(res)
       this.getAllCustomers()
      },
      error:err=>{
        //console.log(err)
      }
    })
  }

//#endregion

//#region callApi update
openEdit(customer: AllCustomerss) {

  this.selectedCustomer = customer;
  this.selectedCustomerid = customer.id;

  this.editForm.patchValue({
    name: customer.name,
    phone: customer.phone,
    email: customer.email,
    address: customer.address,
    notes: customer.notes
  });

  this.showEditPopup.set(true);
 // console.log(this.selectedCustomerid);
  
}
closePopup() {

  this.showEditPopup.set(false);

}

private fb = inject(FormBuilder);
selectedCustomer: AllCustomerss | null = null;
editForm = this.fb.group({
    
    name: ["", [ Validators.minLength(3)]],
    code: [null],
    phone: ["",[ Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)], ],
    email: ["", [Validators.email]],
    address: ["", [Validators.minLength(5)]],
    notes: [""],
    
  });

updateNow(){
  if(this.editForm.valid ){
    this._cusomerService.updateCustomer(this.selectedCustomerid!, this.editForm.value as customerFormReq).subscribe({
      next:res=>{
       // console.log(res)
        this.closePopup()
        this.getAllCustomers()
        this.showMessage(
         res.message,
        'success'
 );
        
      },
      error:err=>{
       // console.log(err)
        this.showMessage(
          'An error occurred while updating the customer.',
          'error'
        );
      }
    })
  }
}

//#endregion

//#region showMessage
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
}
