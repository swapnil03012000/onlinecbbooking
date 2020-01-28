import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service:DataService,public router : Router) { }

  ngOnInit() {
  }

  SignUpData(DataFromUI:any)
  {
let result = this.service.SignUpData(DataFromUI.form.value);
result.subscribe((data:any)=>{
  if (data.error == null)
  {
    this.router.navigate(['/home']);
    
  } else {
    console.log("something went wrong");
    
  }
})
  }

  SignUpRedirect()
  {
    this.router.navigate(['/signin']);
  }


}
