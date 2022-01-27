import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetOrderComponent } from '../get-order/get-order.component';


@Injectable({
  providedIn: 'root'
})
export class GetOrderService {

  constructor(private http: HttpClient) { }


   getOrderService(account:string, orderId:string, vtexApiKey:string, vtexApiToken:string):Observable<any>{
    const url = 'api/api/oms/pvt/orders/'+`${orderId}`
    const options = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VTEX-API-AppKey': vtexApiKey,
      'X-VTEX-API-AppToken': vtexApiToken
    });

    console.log(url)
    const body = JSON.stringify('')
    const data = this.http.get(url, {'headers': options})    
    return data
  }

}
