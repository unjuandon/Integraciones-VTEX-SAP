import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor(private http: HttpClient) { }


  Prices(account:string, itemId:string, vtexApiKey:string, vtexApiToken:string):Observable<any>{
    const url = ' https://api.vtex.com/'+`${account}`+'/pricing/prices/'+`${itemId}`

    const options = new HttpHeaders({

      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VTEX-API-AppKey': vtexApiKey,
      'X-VTEX-API-AppToken': vtexApiToken
    });

    console.log("la url del enpoint es: ", url)


    const data = this.http.get(url, {'headers': options})


    return data

  }

}
