import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDataService } from './mock-data.service';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsService } from './items-service.service';
import { AppRoutingModule } from './router';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(MockDataService, {
      passThruUnknownUrl: true
    })
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
