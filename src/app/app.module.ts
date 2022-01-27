import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { GetOrderComponent } from './get-order/get-order.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StartHandlingComponent } from './start-handling/start-handling.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
