import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { rateCome, ratingreq } from "../../interfaces/rating/rate";
import { localUrl } from "../../bases/localBaseUrl";

@Injectable({
    providedIn:'root'
})
export class RateService{
    private htpp = inject(HttpClient)

    getRate(formRate:ratingreq):Observable<rateCome>{
        return this.htpp.post<rateCome>(`${localUrl.url}RateCalculations` , formRate)
    }
    
}