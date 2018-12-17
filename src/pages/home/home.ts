import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public formOne : FormGroup;
  valueIonInput: string = ""
  currency: string = ""
  noCard: string =""
  hiddenProp: boolean = true
  constructor(public navCtrl: NavController,private formBuilder: FormBuilder) {
    this.formOne = this.createMyForm2()
  }

  private createMyForm2(){
    return this.formBuilder.group({
      monto:  ['',  [Validators.compose([Validators.required])]],
      noCard: ['',  [Validators.compose([Validators.required]),this.cardNumValidator]],
    })
  }

  cardNumValidator = (cardNumControl: AbstractControl) => {

    let cardNum: string = cardNumControl.value;

      if(cardNum.length >= 19){
         return   true
      }

      return   {
        passwordValidator: false
      }
    }
    probar(){

      console.log(this.currency)

    }
    refactorMonto(monto){
      let value = monto.replace(".", "").replace(",", "")
      return value
    }

    showMonto(event):void{
      this.currency = event.currency

    }

    validate (inputname,value) {

      if(inputname == 'noCard' ){
        value.length >= 19? this.hiddenProp = false:this.hiddenProp = true

      }
    }

}
