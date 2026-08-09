import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrdersService } from '../../../core/services/orders/orderService';
import { orderDetilas } from '../../../core/interfaces/order/order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-allorder',
  imports: [RouterLink , DatePipe],
  templateUrl: './allorder.html',
  styleUrl: './allorder.css',
})
export class Allorder implements OnInit{
  ngOnInit(): void {
    this.getAll()
  }
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

  delte(id:number){
    this._orderService.deleteORD(id).subscribe({
      next:res=>{
        this.getAll()
      }
    })
  }
  
}
