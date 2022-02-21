import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CancelService } from '../services/cancel.service';
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/Input.js";

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent implements OnInit {
  account ='';
  environment ='';
  orderId= '';
  vtexApiKey='';
  vtexApiToken ='';
  reason='';




  constructor(private cancelService:CancelService) { }

  ngOnInit(): void {
  }

  cancelOr(){


    let confirmacion = prompt("desea cancelar su pedido?", "si")

    if(confirmacion == "si")
    {
      this.cancelService.cancelOrder(this.account,this.orderId, this.vtexApiKey, this.vtexApiToken, this.reason).subscribe(data =>
        console.log(data))
      console.log(this.account, this.orderId, this.vtexApiKey, this.vtexApiToken)

      alert('se ha cancelado su pedido');
    }

    else{
      alert('NO se ha cancelado su pedido');
    }
    }


  }


