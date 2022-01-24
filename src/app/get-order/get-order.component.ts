import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrls: ['./get-order.component.css']
})
export class GetOrderComponent implements OnInit {


  accountName ='';
  environment ='';
  orderId= '';
  vtexApiKey='';
  vtexApiToken ='';

  saveData(){
    alert('Se está trayendo su orden')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
