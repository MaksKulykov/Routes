import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Item } from '../../models/item';
import { ItemsService } from '../../items-service.service';

@Injectable()
export class ItemResolve implements Resolve<Item> {

  constructor(private itemsService: ItemsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.itemsService.getItemById(+route.paramMap.get('id'));
  }
}
