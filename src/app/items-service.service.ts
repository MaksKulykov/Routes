import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ItemsService {
  private url = 'api/items';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private extractData(res: Response): any[] {
    const body = res.json();
    return body.data || {};
  }

  getItems(): Observable<any> {
    const options = new RequestOptions({headers: this.headers});
    return this.http.get(this.url, options)
      .map(this.extractData)
      .catch((error: any) => Observable.throw(error));
  }

/*  getItemById(id: number): any {
    return this.items.filter(item => item.id === id);
  }*/
}

