import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Item } from '../models/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  title = 'Описание товара';
  id: number;
  status: string;
  item: Item;

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.item = new Item();
    this.activatedRoute.params.subscribe(params => {
      this.status = params['status'];
      this.id = +params['id'];
      this.goToList();
    });
    this.item = this.activatedRoute.snapshot.data['item'];
  }

  goBack(): void {
    this.location.back();
  }
  goToList(): void {
    if (this.status === 'buy') {
      setTimeout(() => {
        this.router.navigate(['/items']);
      }, 5000);
    }
  }
  goToBuy(): void {
    this.router.navigate(['/item', this.id, 'buy']);
  }
}

