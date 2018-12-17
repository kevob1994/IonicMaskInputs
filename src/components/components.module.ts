import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { RefactorCurrentMaskComponent } from './input-currency-mask/input-currency-mask';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  declarations: [
    RefactorCurrentMaskComponent
  ],
  exports: [
    RefactorCurrentMaskComponent
  ]
})
export class ComponentsModule { }
