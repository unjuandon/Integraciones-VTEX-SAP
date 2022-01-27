import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CancelService {


  constructor(private http:HttpClient) { }

  cancelOrder(account:string,orderId:string,vtexApiKey:string,vtexApiToken:string, reason:string):Observable<any>{  

    const url = 'api/api/oms/pvt/orders/'+`${orderId}`+'/cancel';
    const options = new HttpHeaders ({          
      Accept:'application/json',
      'Content-Type': 'application/json',
      'X-VTEX-API-AppKey': vtexApiKey,
      'X-VTEX-API-AppToken': vtexApiToken,
            
  });

   const body = JSON.stringify(reason)
   console.log(body)
  console.log("Los headers, son:" + options+url)
  return this.http.post(url, body, {'headers':options} )
  
  

}
}



