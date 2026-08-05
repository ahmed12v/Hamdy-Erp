import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { addRes, AllCustomerss, customerFormReq, updateResponse } from "../../interfaces/customer/customer";
import { localUrl } from "../../bases/localBaseUrl";

@Injectable({
    providedIn: "root"
})
export class CustomerService {
    private http = inject(HttpClient);

    addCustomer(customerForm:customerFormReq):Observable<addRes>{
        return this.http.post<addRes>(`${localUrl.url}Customer`,customerForm)
    }
    getAllCustomers():Observable<AllCustomerss[]> {
        return this.http.get<AllCustomerss[]>(`${localUrl.url}Customer`);
    }
    updateCustomer(id:number, customerForm:customerFormReq):Observable<updateResponse>{
        return this.http.put<updateResponse>(`${localUrl.url}Customer/${id}`, customerForm)
    }
    deleteCustomer(id:number):Observable<any>{
        return this.http.delete(`${localUrl.url}Customer/${id}`)
    }

}