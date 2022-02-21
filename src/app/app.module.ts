import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { OrigamiModule } from '@codebakery/origami';
import { OrigamiFormsModule } from '@codebakery/origami/forms';


import {APP_INITIALIZER  } from '@angular/core';





import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { GetOrderComponent } from './get-order/get-order.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StartHandlingComponent } from './start-handling/start-handling.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventoryComponent } from './inventory/inventory.component';
import { PricesListComponent } from './prices-list/prices-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    GetOrderComponent,
    CancelOrderComponent,
    NavBarComponent,
    StartHandlingComponent,
    InvoiceComponent,
    InventoryComponent,
    PricesListComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    OrigamiFormsModule
  ],



  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
