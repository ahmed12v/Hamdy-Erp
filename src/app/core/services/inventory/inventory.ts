import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { inventory } from "../../interfaces/inventory/inventory";
import { localUrl } from "../../bases/localBaseUrl";

@Injectable({
    providedIn:'root'
})
export class inventoryService{
    private http = inject(HttpClient)

    getAllInventory():Observable<inventory[]>{
        return this.http.get<inventory[]>(`${localUrl.url}Inventory`)
    }

    deleteSupllay(id:number):Observable<any>{
        return this.http.delete(`${localUrl.url}Inventory/item/${id}`)
    }
}