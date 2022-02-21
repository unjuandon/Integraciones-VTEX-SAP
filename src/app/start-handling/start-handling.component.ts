import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StartService } from '../services/start.service';
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/Input.js";
@Component({
  selector: 'app-start-handling',
  templateUrl: './start-handling.component.html',
  styleUrls: ['./start-handling.component.css']
})
export class StartHandlingComponent implements OnInit {



    accountName=''
    environment=''
    orderId=''
    vtexApiKey=''
    vtexApiToken=''




  saveData(){
    alert('Data saved!')
  }

  constructor(private startService: StartService) { }

  ngOnInit(): void {
  }


  onStart(){

    this.startService.startHandling(this.accountName, this.orderId, this.vtexApiKey, this.vtexApiToken).subscribe(data =>{
      console.log(data);
    })
    console.log(this.accountName, this.environment, this.vtexApiKey, this.vtexApiToken)

    alert('Su pedido empieza el ciclo de manejo')

  // onStart()
  // {
  //   this.startService.startHandling().subscribe(data =>{
  //     console.log(data)
  //   })
  // }

  }



}
