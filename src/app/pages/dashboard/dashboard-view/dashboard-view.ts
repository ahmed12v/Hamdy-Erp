import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { OrdersService } from '../../../core/services/orders/orderService';
import { orderDetilas } from '../../../core/interfaces/order/order';
import { DecimalPipe } from '@angular/common';
import { inventoryService } from '../../../core/services/inventory/inventory';
import { CustomerService } from '../../../core/services/customers/customer';
import { AllCustomerss } from '../../../core/interfaces/customer/customer';
import { SuppliersService } from '../../../core/services/suppliers/suppliers=Service';
import { supplierRes } from '../../../core/interfaces/suppliers/supppliers';

@Component({
  selector: 'app-dashboard-view',
  imports: [DecimalPipe],
  templateUrl: './dashboard-view.html',
  styleUrl: './dashboard-view.css',
})
export class DashboardView implements OnInit{
  ngOnInit(): void {
    this.getAllCustomers()
    this.getAll()
    this.gettotal()
    this.getAllSupplier()
  }
  //#region order 
  _orderService=inject(OrdersService)
  allOrders = signal<orderDetilas[]>([])
  empty=signal(false)

  getAll(){
    this._orderService.getAll().subscribe({
      next:res=>{
      this.allOrders.set(res)
      console.log(res);
      if(!res || res.length === 0) {
        this.empty.set(true)
      }
      
      },
      error:err=>{
        console.log(err);
        

      }
    })
  }


  totalPrice = computed(() => {
  return this.allOrders().reduce((total, order) => {
    return total + (order.finalPrice || 0);
  }, 0);
});
  //#endregion

  //#region  totalPurches
   _inventory = inject(inventoryService)
   numberTotal=signal<number|null>(null)
  gettotal(){
    this._inventory.totalPurces().subscribe({
      next:res=>{
    this.numberTotal.set(res.totalPurchases)
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
        console.log(res)
        this.customers.set(res)
        console.log(this.customers.length);
        
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
}
