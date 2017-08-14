import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../items-service.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  title = 'Список товаров';
  items: Array<any>;

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.items = [];
    this.getItem();
  }
  getItem(): void {
    this.items = this.itemsService.getItems();
  }
}
