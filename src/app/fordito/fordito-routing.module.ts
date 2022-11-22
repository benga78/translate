import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForditoComponent } from './fordito/fordito.component';


const routes: Routes = [
  {
    path: '',
    component: ForditoComponent,
  },
  {
    path: 'registration',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForditoRoutingModule { }
