import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import {  MatTableModule } from 'angular-material'
import { ngxCsv } from 'ngx-csv';
import { delay } from 'rxjs';

import { OrderReports } from 'src/orderReports';
import { GetOrderService } from '../services/get-order.service';








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



  constructor(private getOrderService: GetOrderService) { }




  ngOnInit(): void {
    // this.getAllOrders()
  }











  getOrder(){
   var csv = this.getOrderService.getOrderService(this.accountName, this.orderId, this.vtexApiKey, this.vtexApiToken).subscribe( res  =>{
   console.log(res);   
    var res = res;
    var data = [{              
    }];
    const dataFinal = data.push(res);

    console.log(data[0]);



    var create = new ngxCsv(data,'helloooo', options)
    console.log(create)
    console.log(data)
  
  })
}



    // console.log(data)

    // var obj = res;

    // console.log(data)

    // var temp = JSON.stringify(obj)

    // console.log(temp)
    // console.log(typeof temp)

    

    // var create = new ngxCsv(data,'helloooo')
    // console.log(create)
    // console.log(data)
    // })



    // new ngxCsv(temp, 'hello again')

    // var data = [{
    //   csv:{}
    // }]

    // new ngxCsv(csv ,'otra prueba', options)
    // console.log(csv)
    
    // console.log(data);
    // var Order = JSON.stringify(data)
    // var parsed = JSON.parse(Order)    
    // alert(Order)  
    // })
      
      
 

    
    
   
  


 
  


  // public getAllOrders(){
  //   let response=this.getOrderService.getOrderService(this.accountName, this.orderId, this.vtexApiKey, this.vtexApiToken);
  //   response.subscribe(order=>this.dataSource.data=order as OrderReports[])
  // }


}