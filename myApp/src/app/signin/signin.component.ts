import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public service:DataService, public router : Router) { }

  ngOnInit() {
  }

  SignIn(myForm)
  {
    debugger
    let result = this.service.SignIn(myForm.form.value)
result.subscribe((data:any)=>{
    
  if (data.error == null)
  {
var abc=data.Data.roleId;
this.router.navigate(['/home']);
    
  } else {
    console.log("something wrong");
    
  }
})
  }

  ForgotPassword()
  {
    this.router.navigate(['/change_password']);
  }
  homeredirect()
  {
    this.router.navigate(['/home']);
  }

}
