import { Component, inject, OnInit, signal } from '@angular/core';
import { matrialService } from '../../../core/services/materials/matrialserv';
import { amtrialsResponse } from '../../../core/interfaces/matrials/matrial';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-matrials',
  imports: [RouterLink],
  templateUrl: './all-matrials.html',
  styleUrl: './all-matrials.css',
})
export class AllMatrials implements OnInit{
  ngOnInit(): void {
    this.getMatrial()
  }
   //#region declare
  allMatrials = signal<amtrialsResponse[] | null>(null)
  _matrialservice = inject(matrialService)
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

  //#region edlete api
  deletethis(id:number){
    this._matrialservice.deletMatrial(id).subscribe({
      next:res=>{
        console.log(res);
        this.getMatrial()
      },
      error:err=>{
        console.log(err);
      
      }
    })
  }
  //#endregion 


}
