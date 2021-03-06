import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedService {






  constructor(private http: HttpClient)  { }

  getFeed(account:string,environment:string,maxLot:string,vtexApiKey:string,vtexApiToken:string):Observable<any>{    
    const url = 'https://'+`${account}`+'.'+`${environment}`+'.com.br/api/orders/feed?maxlot='+`${maxLot}`;
    const options = new HttpHeaders ({          
        Accept:'application/json',
        'Content-Type': 'application/json',
        'X-VTEX-API-AppKey': vtexApiKey,
        'X-VTEX-API-AppToken': vtexApiToken      
    });
    return this.http.get(url, {headers:options})
    console.log(url)
    
  }
}
