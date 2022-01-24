import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { GetOrderComponent } from './get-order/get-order.component';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartHandlingComponent } from './start-handling/start-handling.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes : Routes = [
  {path: '', pathMatch:'full',redirectTo:'/home'},
  {path:'home', component: HomeComponent},
  { path: 'feed', component: FeedComponent },
  { path: 'cancel-order', component: CancelOrderComponent },
  { path: 'get-order', component: GetOrderComponent },
  { path: 'start-handling', component: StartHandlingComponent},
  {path: 'invoice', component: InvoiceComponent},


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
