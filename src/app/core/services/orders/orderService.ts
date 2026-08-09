import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { orderDetilas, reqInterface, responseAfterGreation } from "../../interfaces/order/order";
import { localUrl } from "../../bases/localBaseUrl";

@Injectable({
    providedIn:'root'
})
export class OrdersService {
    private http = inject(HttpClient)

    getAll():Observable<orderDetilas[]>{
        return this.http.get<orderDetilas[]>(`${localUrl.url}Orders`)
    }

    greateOrderNow(formReq:reqInterface):Observable<responseAfterGreation>{
        return this.http.post<responseAfterGreation>(`${localUrl.url}Orders`, formReq)
    }

    deleteORD(id:number):Observable<any>{
      return this.http.delete(`${localUrl.url}Orders/${id}`)
    }
}