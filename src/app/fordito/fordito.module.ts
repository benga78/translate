import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ForditoRoutingModule } from './fordito-routing.module';
import { ForditoComponent } from './fordito/fordito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorComponent } from './error/error.component';




@NgModule({
  declarations: [
    ForditoComponent,
    ErrorComponent
  ],
  exports: [ForditoComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    ForditoRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    

  ]
})
export class ForditoModule { }
