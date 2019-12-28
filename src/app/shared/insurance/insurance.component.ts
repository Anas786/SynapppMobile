import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss'],
})
export class InsuranceComponent implements OnInit {
  @Input('mode') mode : string = 'view';
  @Input('details') details : any ;  
  constructor() { }

  ngOnInit() {}

}
