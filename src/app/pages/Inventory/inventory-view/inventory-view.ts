import { Component, inject, OnInit, signal, ViewChild, viewChild } from '@angular/core';
import { inventoryService } from '../../../core/services/inventory/inventory';
import { inventory } from '../../../core/interfaces/inventory/inventory';
import { Toaster } from '../../../shared/addtions/toaster/toaster';

@Component({
  selector: 'app-inventory-view',
  imports: [Toaster],
  templateUrl: './inventory-view.html',
  styleUrl: './inventory-view.css',
})
export class InventoryView implements OnInit{
  ngOnInit(): void {
    this.getAll()
  }
  _inventoryService = inject(inventoryService)
 allInventory =signal<inventory[]>([])
 @ViewChild(Toaster)
  toast!: Toaster;

  getAll(){
    this._inventoryService.getAllInventory().subscribe({
      next:res=>{
        this.allInventory.set(res)
      }
    })
  }


 deleteNow(id:number){
  this._inventoryService.deleteSupllay(id).subscribe({
    next:res=>{
   this.toast.show('supply deleted successfully' , 'success')
   this.getAll()
    },
    error:err=>{
      this.toast.show('errorr in deleted' , 'error')
    }
  })
 }


}
