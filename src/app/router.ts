import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemResolve } from './shared/guards/item.resolve';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsListComponent
  },
  {
    path: 'item/:id/:status',
    component: ItemDetailsComponent,
    resolve: {
      item: ItemResolve
    }
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
