import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { ArmorPickerComponent } from '../armor-picker/armor-picker.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CalculatorComponent, ArmorPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
