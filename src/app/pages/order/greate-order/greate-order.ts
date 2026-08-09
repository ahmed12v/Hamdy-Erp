import { Location } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { amtrialsResponse } from '../../../core/interfaces/matrials/matrial';
import { matrialService } from '../../../core/services/materials/matrialserv';
import { CustomerService } from '../../../core/services/customers/customer';
import { AllCustomerss } from '../../../core/interfaces/customer/customer';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrdersService } from '../../../core/services/orders/orderService';

@Component({
  selector: 'app-greate-order',
  imports: [ReactiveFormsModule],
  templateUrl: './greate-order.html',
  styleUrl: './greate-order.css',
})
export class GreateOrder  implements OnInit{
  ngOnInit(): void {
    this.getAllCustomers()
    this.getMatrial()
  }
  private _location = inject(Location)
  goBack(){
    this._location.back()
  }

  //#region declare
  allMatrials = signal<amtrialsResponse[] | null>(null)
  _matrialservice = inject(matrialService)
  //#endregion

  //#region callApi
  getMatrial(){
    this._matrialservice.getAllMatrial().subscribe({
      next:re=>{
        console.log(re);
        this.allMatrials.set(re)
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  //#endregion

  //#region callApi get
    _cusomerService=inject(CustomerService)
    customers = signal<AllCustomerss[]>([]); 
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

 //#region geritionOrderForm
 orderGreteForm : FormGroup = new FormGroup({
  customerId:new FormControl([Validators.required]),
  materialId:new FormControl([Validators.required]),
  weight:new FormControl(0,[Validators.required]),
  gramPrice:new FormControl(0,[Validators.required]),
  hours:new FormControl(0,[Validators.required]),
  machineHourPrice:new FormControl(0),
  electricityHourPrice:new FormControl(0,[Validators.required]),
  laborHourPrice:new FormControl(0),
  wastePercentage:new FormControl(0),
  profitPercentage:new FormControl(0),
 })
 //#endregion

 //#region apiCal
 _orderSer=inject(OrdersService)
 errMsg=signal('')
 gMsg=signal('')
 greateNow(){
  if(this.orderGreteForm.valid){
    this._orderSer.greateOrderNow(this.orderGreteForm.value).subscribe({
      next:res=>{
        console.log(res);
        this.gMsg.set(res.message)
        alert(this.gMsg())
      },
      error:err=>{
        console.log(err);
        this.errMsg.set(err.error)
        alert(this.errMsg())
      }
    })
  }
 }
 //#endregion

 

}
