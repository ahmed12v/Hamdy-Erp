import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { amtrialsResponse, colorsResponse, matials, matrialReq } from "../../interfaces/matrials/matrial";
import { localUrl } from "../../bases/localBaseUrl";

@Injectable({
    providedIn:'root'
}) 
export class matrialService{
    private http = inject(HttpClient);

    addMat(matrialform:matrialReq):Observable<any>{
        return this.http.post(`${localUrl.url}Materials`, matrialform)
    }

    getAllMatrial():Observable<amtrialsResponse[]>{
        return this.http.get<amtrialsResponse[]>(`${localUrl.url}Materials`)
    }

    deletMatrial(id:number):Observable<any>{
       return this.http.delete(`${localUrl.url}Materials/${id}`)
    }
    getMatColor():Observable<colorsResponse[]>{
        return this.http.get<colorsResponse[]>(`${localUrl.url}Colors`)
    }
}