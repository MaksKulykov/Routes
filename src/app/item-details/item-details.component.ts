import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Item } from '../models/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  title = 'Описание товара';
  status: string;
  item: Item;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.item = new Item();
    this.activatedRoute.params.subscribe(params => {this.status = params['status']; });
    this.item = this.activatedRoute.snapshot.data['item'];
  }

}

