import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StartService } from '../services/start.service';

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

    this.startService.startHandling(this.accountName, this.environment, this.orderId, this.vtexApiKey, this.vtexApiToken).subscribe(data =>{
      console.log(data)
    })

  // onStart()
  // {
  //   this.startService.startHandling().subscribe(data =>{
  //     console.log(data)
  //   })
  // }
    
  }
 


}