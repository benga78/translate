import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ForditoRoutingModule } from './fordito-routing.module';
import { ForditoComponent } from './fordito/fordito.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ForditoComponent
  ],
  exports:[ForditoComponent],
  imports: [
    CommonModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ForditoRoutingModule,
    FormsModule,
    RouterModule
    
  ]
})
export class ForditoModule { }
