import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api/api-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  tab="home";
  mode='view';
  details:any;
  constructor(private route: ActivatedRoute,
    private apiservice : ApiServiceService
    ) { }

  ngOnInit() {
    this.route.params.subscribe( params =>{ 
      this.apiservice.getDetails(params['id']).subscribe(data=>{
        this.details = data;
      },
      err=>{
        console.log(err);
      });    
    });
  }
  segmentChanged(params){
    this.tab = params.detail.value;
  }
}
