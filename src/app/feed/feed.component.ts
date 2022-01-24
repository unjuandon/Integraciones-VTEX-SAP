import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedService } from '../services/feed.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


account = ''
maxLot= ''
environment =''
vtexApiKey =''
vtexApiToken=''



constructor(private feedService: FeedService)
{

}


  


  // arrFeed: any[];


//   getFeed()
//   {
//   const url = 'https://mqaenvironment.vtexcommercestable.com.br/api/orders/feed/config';
//   const options = {
//   method: 'GET',
//   headers: {'Content-Type': 'application/json', Accept: 'application/json',
//   'X-VTEX-API-AppKey': 'vtexappkey-mqaenvironment-ODNKOY',
//   'X-VTEX-API-AppToken': 'IHQBLPMKKNZGUIVFHTZAFEISDZGVWFOZJCAPQPIAUUWMYZBLVGQMSFLEYYYMIQOEZAWRIGORLZFKIWTDXVAPPBHEQVRSQWREFRNYCKDPSZBSZAVCEVONPYPXTSAMOVAP'
// }
// };

//  fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
//   alert('feed consultado')
//   }





 

  ngOnInit(){

  }


  obtenerFeed()
  {
    
    this.feedService.getFeed(this.account, this.environment, this.maxLot, this.vtexApiKey, this.vtexApiToken).subscribe(data => 
      console.log(data))

      console.log(this.account, this.environment, this.maxLot, this.vtexApiKey, this.vtexApiToken)
  }


  onCsv(){

  }


}
