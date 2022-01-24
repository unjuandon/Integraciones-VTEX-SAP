import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  constructor(private http: HttpClient) { }


  startHandling(account:string,environment:string,orderId:string,vtexApiKey:string,vtexApiToken:string):Observable<any>{  

    const url = 'https://'+`${account}`+'.vtexcommercestable.com.br/api/oms/pvt/orders/'+`${orderId}`+'/start-handling';
    const  headers = new HttpHeaders ({
      method: 'POST',      
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-VTEX-API-AppKey': vtexApiKey,
        'X-VTEX-API-AppToken': vtexApiToken
      
    });
    return this.http.get(url, {headers:headers})
    
    // startHandling():Observable<any>{ 
    // const url = 'https://jsonplaceholder.typicode.com/todos/1'
    // return this.http.get(url)
    // console.log(url)
    
  //}
}
}

