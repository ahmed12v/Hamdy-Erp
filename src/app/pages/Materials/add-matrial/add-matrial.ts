import { Component, inject, OnInit, signal } from '@angular/core';
import { matrialService } from '../../../core/services/materials/matrialserv';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { colorsResponse } from '../../../core/interfaces/matrials/matrial';

@Component({
  selector: 'app-add-matrial',
  imports: [ReactiveFormsModule],
  templateUrl: './add-matrial.html',
  styleUrl: './add-matrial.css',
})
export class AddMatrial implements OnInit{
  ngOnInit(): void {
    this.getColors()
  }
  _matrialSer=inject(matrialService)

  addForm:FormGroup = new FormGroup({
    materialName:new FormControl('', [Validators.required]),
    colorId:new FormControl([Validators.required]),
    unit:new FormControl(''),
    currentStock:new FormControl(0,[Validators.required]),
    gramPrice:new FormControl(0),
  })

  addNow(){
    if(this.addForm.valid){
      this._matrialSer.addMat(this.addForm.value).subscribe({
        next:res=>{
         console.log(res);
         this.addForm.reset
        },
        error:err=>{
        console.log(err);
        
        }
      })
    }
  }


  allcolors = signal<colorsResponse[]|null>(null)

  getColors(){
    this._matrialSer.getMatColor().subscribe({
      next:res=>{
        console.log(res);
        this.allcolors.set(res)
      }
    })
  }
}
