import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import {  MatTableModule } from 'angular-material'

import { ngxCsv } from 'ngx-csv';
import { delay } from 'rxjs';

import { OrderReports } from 'src/orderReports';
import { GetOrderService } from '../services/get-order.service';








var options = { 
  fieldSeparator: ";",
  decimalseparator: '.',
  showLabels: false, 
  showTitle: false,
  title: false,
  useBom: true,  
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



  constructor(private getOrderService: GetOrderService) { }




  ngOnInit(): void {
    // this.getAllOrders()
  }











  getOrder(){
   var csv = this.getOrderService.getOrderService(this.accountName, this.orderId, this.vtexApiKey, this.vtexApiToken).subscribe( res  =>{ 
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


    var create = new ngxCsv(data,'helloooo'+'_'+ 'Día:'+hoy.getDate()+'Hora:'+ hoy.getHours() + 'Minuto:' + hoy.getMinutes() , options)
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