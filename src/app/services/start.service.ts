import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { StartHandlingComponent } from '../start-handling/start-handling.component';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  constructor(private http: HttpClient) { }


  startHandling(account:string,orderId:string,vtexApiKey:string,vtexApiToken:string):Observable<any>{  

    const url = 'api/api/oms/pvt/orders/'+`${orderId}`+'/start-handling';
    const  options = new HttpHeaders ({     
               
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VTEX-API-AppKey': vtexApiKey,
        'X-VTEX-API-AppToken': vtexApiToken
      
    });
    console.log(url)
    const body = JSON.stringify('')
    return this.http.post(url, body, {'headers':options})
    
    // startHandling():Observable<any>{ 
    // const url = 'https://jsonplaceholder.typicode.com/todos/1'
    // return this.http.get(url)
    // console.log(url)
    
  //}
}
}

