import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { PurcgesReq, responPurches } from "../../interfaces/purches/purches";
import { Observable } from "rxjs";
import { localUrl } from "../../bases/localBaseUrl";

@Injectable({
    providedIn:'root'
})
export class purchesServices{
    private http = inject(HttpClient)

    addPurReq(reqForm:PurcgesReq):Observable<responPurches>{
        return this.http.post<responPurches>(`${localUrl.url}Purchases`, reqForm)
    }
}