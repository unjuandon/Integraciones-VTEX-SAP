import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedService } from '../services/feed.service';
import { ngxCsv } from 'ngx-csv';







var options = { 
  fieldSeparator: ';',
  quoteStrings: '"',
  decimalseparator: '.',
  showLabels: false, 
  showTitle: false,
  title: 'Your title',
  useBom: true,  
  noDownload: false, 
  headers: [],
  useHeader: false,
  nullToEmptyString: false,
};






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

  ngOnInit(){

  }


  obtenerFeed()
  {
    
     var csvFeed=this.feedService.getFeed(this.account,this.maxLot, this.vtexApiKey, this.vtexApiToken).subscribe(res => {
      console.log(res);
      var res = res;
      var data = [{
      }];

      const dataFinal = data.push(res);

      // console.log(dataFinal)

      console.log(data[1]);
    
      var create = new ngxCsv(data[1], 'jerejá', options);
      console.log(create);
      console.log(data[1]);

     })
  }
}

     

      
  



