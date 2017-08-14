import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ItemsService } from '../items-service.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  id: number;
  status: string;
  item: any;

  constructor(
    private itemsService: ItemsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
/*    this.activatedRoute
      .paramMap
      .map((params: ParamMap) => {
      console.log(params);
      this.id = +params.get('id');
      this.status = params.get('status');
      console.log(this.id);
      this.itemsService.getItemById(this.id)
        .then(item => this.item = item,
          console.log(this.item)
        );
      });*/
  }


}
