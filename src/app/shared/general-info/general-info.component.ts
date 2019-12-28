import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
})
export class GeneralInfoComponent implements OnInit {
  @Input('mode') mode : string = 'view';
  @Input('details') details : any ;  
  user = new FormGroup({
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required)
 });
  constructor() { }

  ngOnInit() {}

}
