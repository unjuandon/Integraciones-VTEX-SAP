import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http : HttpClient) { }



  sendInventory(account:string, skuId:string, warehouseId:string, vtexApiKey:string, vtexApiToken:string):Observable<any>{
    const url = 'api/logistics/pvt/inventory/skus/'+`${skuId}`+'/warehouses'+`${warehouseId}`
    const options = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VTEX-API-AppKey': vtexApiKey,
      'X-VTEX-API-AppToken': vtexApiToken
    });

    console.log(url)
    const body = JSON.stringify('')
    
    const data = this.http.put(url, body, {'headers': options})    
    return data
  }

}



