import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents/dist/Input.js"
import "@ui5/webcomponents/dist/Button.js"
import { HighContrastMode } from '@angular/cdk/a11y';
import { InventoryService } from '../services/inventory.service';
import { Papa } from 'ngx-papaparse';
import { APP_INITIALIZER } from '@angular/core';



@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {






  public dateUtcOnBalanceSystem:any;
  public unlimitedQuantity: any;
  public quantity:any;

  accountName = '';
  environment = '';
  orderId = '';
  vtexApiKey = '';
  vtexApiToken = '';
  skuId = '';
  warehouseId = '';
  title = 'csvTOjson works!';
  text  : any ;
  JSONData : any;
  chunk:any;
  // body:any =  {"quantity":12,"timeToRefill (deprecated)":"213","unlimitedQuantity":true}
  private papa: Papa = new Papa;








  constructor(private Inventory: InventoryService) { }

  ngOnInit(): void {
  }


  parseCsvFile(file)
  {
    this.papa.parse(file,
      {
        header:true,
        dynamicTyping:true,
        skipEmptyLines:'greedy',
        chunk: this.papaParseChunk,
      }


    )}


    papaParseChunk(chunk)
    {
      // console.log("Chunk:", chunk.data)

      console.log("chunk: ", chunk)




    }



  handleUpload($event:any)
  {
    const fileList = $event.srcElement.files;
    this.parseCsvFile(fileList[0])

   this.parseCsvFile(fileList[0])
  }



  setInventory(chunk){

    this.Inventory.sendInventory(this.accountName, this.skuId, this.warehouseId, this.vtexApiKey, this.vtexApiToken).subscribe(res =>
      {

        console.log(res)




        console.log(this.accountName, this.skuId, this.warehouseId, this.vtexApiKey, this.vtexApiToken)
      })

  }

}
