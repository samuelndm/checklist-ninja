import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';

import { ChecklistRoutingModule } from './checklist-routing.module';
import { ChecklistComponent } from './checklist.component';


@NgModule({
  declarations: [ChecklistComponent],
  imports: [
    CommonModule,
    ChecklistRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class ChecklistModule { }
