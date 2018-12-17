import { Component, Input, forwardRef, EventEmitter, Output  } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * Generated class for the RefactorCurrentMaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'input-currency-mask',
  templateUrl: 'input-currency-mask.html'
})
export class RefactorCurrentMaskComponent {


  @Input() placeholder: string;
  @Input() label: string;
  @Input() typeLabel = '';
  @Input() clearInput = false;
  @Input() lastChild = false;
  @Input() disabled = false;
  @Input() usd= "";
  @Output() currencyShow = new EventEmitter();

  public valueIonInput: String;
  hiddenPropConf: boolean = true
  private value: number;
  private propagateChange = (_: any) => { };


  constructor() { }

  public onChange($event) {
    console.log($event)

    let value = this.removeDotsComas("")
    console.log(value)
     value=this.removeDotsComas(value)
      value=this.removeDotsComas(value)
     value=this.removeDotsComas(value)
     value=this.removeDotsComas(value)
     value=this.removeDotsComas(value)
     value=this.removeDotsComas(value)
     value=this.removeDotsComas(value)
     value=this.removeDotsComas(value)
     value=this.removeDotsComas(value)
     value=this.removeDotsComas(value)
     value=this.removeDotsComas(value)

    if(value.length <= 1){
      value = '00'+value
    }if(value.length == 2){
      value = (value[0]=='0')?
        '00'+value:
          '0'+value;
    }else{
      if(value[0]=='0' && value[0]=='0' && value.length==4){
        value = value.substr(1,value.length)
      }
    }
    let decimal = value.substr(value.length-2,value.length)
    let entero = this.addPoints(value.substr(0,value.length-2))
    if(entero[0]=='.'){
      entero = entero.substr(1,entero.length)
    }

    this.valueIonInput = entero +','+decimal
    this.currencyShow.emit({currency: this.valueIonInput});
  }


  replaceDotsComas(value){

    this.valueIonInput = this.valueIonInput.replace(/\./g,',')
    this.valueIonInput = this.valueIonInput.substring(0, value.length-3) +
    "." +
    this.valueIonInput.substring(value.length-2, value.length);
  }

  removeDotsComas = (value) => (value=="")?this.valueIonInput.replace(".", "").replace(",", ""):value.replace(".", "").replace(",", "")

  public keyUpEvent(event) {
    let value: any = this.valueIonInput
    for(let i=0;i<this.valueIonInput.length;i++){
      value= value.replace(/[^0-9\s!?]+/g, '').replace(' ', '').trim();
    }

    this.valueIonInput = value.replace(/[^0-9\s!?]+/g, '').replace(' ', '').trim();
    this.onChange(event);
    console.log(event)
  }
  addPoints = value => value.split('').reverse().join('').replace(/\d{3}/g, '$&.').split('').reverse().join('')


}
