import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { supplierReq, supplierRes } from "../../interfaces/suppliers/supppliers";
import { localUrl } from "../../bases/localBaseUrl";

@Injectable({
    providedIn: 'root'
})
export class SuppliersService {
    private http = inject(HttpClient);

    addSulier(supForm:supplierReq):Observable<supplierRes>{
        return this.http.post<supplierRes>(`${localUrl.url}Supplier`,supForm)
    }

    getAllSuppplier():Observable<supplierRes>{
        return this.http.get<supplierRes>(`${localUrl.url}Supplier`)
    }

    editSupplier(puplicid:string , suppForm:supplierReq):Observable<any>{
        return this.http.put(`${localUrl.url}Supplier/${puplicid}`, suppForm)
    }

    delete(id:string):Observable<any>{
        return this.http.delete(`${localUrl.url}Supplier/${id}`)
    }
}