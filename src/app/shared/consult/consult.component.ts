import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss'],
})
export class ConsultComponent implements OnInit {
  @Input('mode') mode : string = 'view';
  @Input('details') details : any ;  
  constructor() { }

  ngOnInit() {}

}
