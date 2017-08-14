import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private itemsService: ItemsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = [];
    this.getItems();
  }
  getItems(): void {
    this.items = this.itemsService.getItems();
  }
  goToDetail(id: string, status: string): void {
    this.router.navigate(['/item', id, status]);
  }
}
