import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForditoGuard } from './fordito/fordito.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/fordito',
    pathMatch: 'full'
  },

  {
    path: 'registration',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)

  },

  {
    path: 'fordito',
    canActivate: [ForditoGuard],
    loadChildren: () => import('./fordito/fordito.module').then(m => m.ForditoModule)

  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
