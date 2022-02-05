import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents/Input.js"
import "@ui5/webcomponents/Select.js"
import "@ui5/webcomponents/Button.js"
import { HighContrastMode } from '@angular/cdk/a11y';
import { InventoryService } from '../services/inventory.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


  accountName = '';
  environment = '';
  orderId = '';
  vtexApiKey = '';
  vtexApiToken = '';
  unlimitedQuantity = '';
  skuId = '';
  warehouseId = '';
  dateUtcOnBalanceSystem='';


  constructor(private Inventory: InventoryService) { }

  ngOnInit(): void {
  }


  setInventory(){
    // this.Inventory.sendInventory.(this.accountName, this.orderId, this.vtexApiKey, this.vtexApiToken).subscribe(res =>
    //   {

    //   })

    this.Inventory.sendInventory(this.accountName, this.skuId, this.warehouseId, this.vtexApiKey, this.vtexApiToken).subscribe(res =>
      {
        console.log(res)
      })
    
  }

}
