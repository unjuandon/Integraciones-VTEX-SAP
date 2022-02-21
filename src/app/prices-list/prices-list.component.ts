import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents/dist/Input.js"
import "@ui5/webcomponents/dist/Button.js"
import { PricesService } from '../services/prices.service';

@Component({
  selector: 'app-prices-list',
  templateUrl: './prices-list.component.html',
  styleUrls: ['./prices-list.component.css']
})
export class PricesListComponent implements OnInit {

  accountName = '';
  environment = '';
  orderId = '';
  vtexApiKey = '';
  vtexApiToken = '';
  itemId = '';


  constructor(private price : PricesService) { }

  ngOnInit(): void {
  }


getPrice()
{
  this.price.Prices(this.accountName, this.itemId, this.vtexApiKey, this.vtexApiToken).subscribe(response => {
    console.log(response)
  })
}

}

