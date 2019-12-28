import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dorders',
  templateUrl: './dorders.component.html',
  styleUrls: ['./dorders.component.scss'],
})
export class DordersComponent implements OnInit {
  @Input('mode') mode : string = 'view';
  @Input('details') details : any ;  
  constructor() { }

  ngOnInit() {}

}
