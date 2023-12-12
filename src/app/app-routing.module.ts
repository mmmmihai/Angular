import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise3Component } from './exercise3/exercise3.component';
import { DetailComponent } from './detail/detail.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';

/* I define all the routes I will use to navigate through  my page */

const routes: Routes = [
  { path: '', redirectTo: '/greetings', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise1Component },
  { path: 'exercise2', component: Exercise2Component },
  { path: 'exercise3', component: Exercise3Component },
  { path: 'transaction/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

