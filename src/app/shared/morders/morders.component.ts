import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-morders',
  templateUrl: './morders.component.html',
  styleUrls: ['./morders.component.scss'],
})
export class MordersComponent implements OnInit {
  @Input('mode') mode : string = 'view';
  @Input('details') details : any ;  
  constructor() { }

  ngOnInit() {}

}
