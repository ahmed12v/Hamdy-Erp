import { Component, inject, OnInit, signal } from '@angular/core';
import { matrialService } from '../../../core/services/materials/matrialserv';
import { amtrialsResponse, matials } from '../../../core/interfaces/matrials/matrial';
import { rateCome } from '../../../core/interfaces/rating/rate';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { RateService } from '../../../core/services/rate/rateService';

@Component({
  selector: 'app-rate',
  imports: [ReactiveFormsModule],
  templateUrl: './rate.html',
  styleUrl: './rate.css',
})
export class Rate implements OnInit {
 
  ngOnInit(): void {
    this.getMatrial()
  }

  //#region declare
  allMatrials = signal<amtrialsResponse[] | null>(null)
  _matrialservice = inject(matrialService)
  _rateService=inject(RateService)
  rateResult = signal<rateCome | null>(null)
  //#endregion
  //#region callApi
  getMatrial(){
    this._matrialservice.getAllMatrial().subscribe({
      next:re=>{
        console.log(re);
        this.allMatrials.set(re)
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  //#endregion

  //#region rateForm
  RateForm:FormGroup = new FormGroup({
    materialId:new FormControl(0,[Validators.required]),
    weight:new FormControl(0,[Validators.required]),
    gramPrice:new FormControl(0,[Validators.required]),
    hours:new FormControl(0,[Validators.required]),
    machineHourPrice:new FormControl(0),
    electricityHourPrice:new FormControl(0,[Validators.required]),
    laborHourPrice:new FormControl(0),
    wastePercentage:new FormControl(0),
    profitPercentage:new FormControl(0),
  })
  //#endregion

  //#region getRate
  getrate(){
    if(this.RateForm.valid){
      this._rateService.getRate(this.RateForm.value).subscribe({
        next:res=>{
          console.log(res);
          this.rateResult.set(res)
        },
        error:err=>{
          console.log(err);
          
        }
      })
    }
  }
}
