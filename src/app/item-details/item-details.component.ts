import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import {ItemsService} from '../items-service.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  title = 'Описание товара';
  id: number;
  status: string;
  item: any = [];

  constructor(private itemsService: ItemsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getItemById();
  }
  getItemById(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.id = +params['id'];
        this.status = params['status'];
        this.itemsService.getItemById(this.id)
          .subscribe(item => {
            this.item = item;
          });
      });
  }
}

