import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import {  MatTableModule } from 'angular-material'
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/Input.js";


import { ngxCsv } from 'ngx-csv';
import { delay } from 'rxjs';

import { OrderReports } from 'src/orderReports';
import { GetOrderService } from '../services/get-order.service';
import { FeedService } from '../services/feed.service';
import { FeedComponent } from '../feed/feed.component';
// import { format } from 'path';








var options = {
  fieldSeparator: ";",
  decimalseparator: '.',
  quoteStrings:'',
  showLabels: false,
  showTitle: false,
  title: false,
  useBom: false,
  noDownload: false,
  headers:  false,
  useHeader: false,
  nullToEmptyString: false,
};


var options2 = {
  fieldSeparator: ";",
  decimalseparator: '.',
  quoteStrings:'',
  showLabels: false,
  showTitle: false,
  title: false,
  useBom: false,
  noDownload: false,
  headers:  false,
  useHeader: false,
  nullToEmptyString: false,
};

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrls: ['./get-order.component.css']
})





export class GetOrderComponent implements OnInit {


  accountName ='';
  environment ='';
  orderId= '';
  vtexApiKey='';
  vtexApiToken ='';
  maxLot ='';



  constructor(private getOrderService: GetOrderService, private Feed: FeedService) { }


 




  ngOnInit(): void {
    // this.getAllOrders()
  }




  getFeed(){
    this.Feed.getFeed(this.accountName, this.environment, this.maxLot, this.vtexApiKey, this.vtexApiToken).subscribe(response => {

      console.log(response[0].orderId)
      

      var data = [{}];       
      
      var aux = [response[0].orderId]

      var date = new Date()
      
      
      data.push(aux)

      var create = new ngxCsv(data, "feed" + 'Día:'+date.getDate()+'Hora:'+ date.getHours() + 'Minuto:' + date.getMinutes(), options2)
      
      console.log(create)
      
    }
    
    
    
    )}



  getOrder(){
  //  var feed= this.Feed.getFeed(this.accountName, this.environment, this.maxLot, this.vtexApiKey, this.vtexApiToken).subscribe(response =>{
  //   console.table(response[0].orderId)

  //   var feedOrders =[]
    
  //   for (let index = 0; index < feedOrders.length; index++) {
  //     this.orderId=feedOrders[index]      
  //   }
  //  }) 

   
   var csv = this.getOrderService.getOrderService(this.accountName, this.environment, this.orderId, this.vtexApiKey, this.vtexApiToken).subscribe( res  =>{
   
   
    var aux = ["",res.orderId,
     "",
     res.clientProfileData.document,
     res.creationDate,
     res.shippingData.address.receiverName,
     res.shippingData.address.street,
     res.shippingData.address.postalCode,
     res.shippingData.address.state,
     res.shippingData.address.country,
     res.clientProfileData.phone,
     "",
     res.clientProfileData.email,
     res.clientProfileData.document,
     res.clientProfileData.firstName,
     res.clientProfileData.lastName,
     res.shippingData.address.street,
     res.shippingData.address.postalCode,
     res.shippingData.address.state,
     res.shippingData.address.country,
     res.clientProfileData.phone,
     "",
     res.clientProfileData.email,
     "",
     "",
     res.items[0].productId,
     res.items[0].quantity,
     res.items[0].costPrice,
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     ""
     ] ;


    console.log(res.items[0])

    var res = res;

    var data = [{
    }];
    const dataFinal = data.push(aux);

    var hoy = new Date();

    var hora = hoy.getDate() + '_' + hoy.getHours() + '_' + hoy.getMinutes()

    var nombre = JSON.stringify(hora)

    console.log(nombre)

    var create = new ngxCsv(data,res.orderId+'_'+ 'Día:'+hoy.getDate()+'Hora:'+ hoy.getHours() + 'Minuto:' + hoy.getMinutes() , options)

    console.log(create)

    console.log(data)

  })
}

}
