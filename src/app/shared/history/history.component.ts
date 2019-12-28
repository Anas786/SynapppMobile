import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  @Input('mode') mode : string = 'view';
  @Input('details') details : any ;  
  constructor() { }

  ngOnInit() {}

}
