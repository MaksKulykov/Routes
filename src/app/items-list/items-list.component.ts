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
    this.itemsService.getItems()
    .subscribe(
      (items => {
        if (items && items.length) {
          this.items = items;
        }
      }),
      (error: any) => {
        console.log(error);
      }
    );
  }
  goToDetail(id: number, status: string): void {
    this.router.navigate(['/item', id, status]);
  }
}
