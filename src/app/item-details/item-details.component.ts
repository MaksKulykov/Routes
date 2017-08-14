import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
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
  id: number;
  status: string;
  item: any;

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
        console.log(params);
        this.id = +params['id'];
        this.status = params['status'];
        console.log(this.id);
        this.itemsService.getItemById(this.id)
          .subscribe(item => {
            this.item = item;
            console.log(this.item);
          });
      });
  }
}

