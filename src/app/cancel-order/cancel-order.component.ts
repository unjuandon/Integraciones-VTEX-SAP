import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent implements OnInit {
  accountName ='';
  environment ='';
  orderId= '';
  vtexApiKey='';
  vtexApiToken ='';
  reason='';


  cancelOrder(){
    alert('orden cancelada');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
