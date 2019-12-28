import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {
  tab="home";
 
  constructor() { }  
  ngOnInit() {
  }
  segmentChanged(params){
    this.tab = params.detail.value;
  }
}
