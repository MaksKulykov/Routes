import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsListComponent } from './items-list/items-list.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsListComponent
  },
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
