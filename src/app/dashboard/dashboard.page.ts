import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  resp=[];
  constructor(private apiservice : ApiServiceService,) { 

    
  }
  ngOnInit() {
    this.apiservice.getList().subscribe(data=>{
      this.resp = data['records']    ;
    },
    err=>{
      console.log(err);
    });    
  }
  searchlist(params){
    this.resp =[];
    this.apiservice.getList({"transaction_number":params.detail.value}).subscribe(data=>{
      this.resp = data['records'];
    },
    err=>{
      console.log(err);
    });  
    console.log(params);
  }
}
