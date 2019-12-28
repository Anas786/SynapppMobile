import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api/api-service.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formBasic: FormGroup;
  constructor(private apiservice : ApiServiceService,
    private fb: FormBuilder,
    private router:Router
    ) { }

  ngOnInit() {
    this.buildFormBasic();
  }
  login(){ 

    this.apiservice.login({
      password: btoa(this.formBasic.get('password').value),
      user_name: btoa(this.formBasic.get('user_name').value)
    }).subscribe(data=>{
        (localStorage.setItem('data',JSON.stringify(data)));
        this.router.navigateByUrl("/dashboard")
    },
    err=>{
      console.log(err);
    }
    
    )
  }
  buildFormBasic() {

    this.formBasic = this.fb.group({
      user_name: new FormControl('', [
        Validators.required
      ]),

      password: new FormControl('', [
        Validators.required
      ]),            
    });
  }
}
