import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  val:any;
  register:any;
  data: any;

  constructor(private service:LoginService, public router : Router) { }


  Register(myForm)
  {
    // this.data=myForm.form.value;
    // console.log(this.data);
    // this.service.Register(this.data).subscribe((result:any)=>{
    //   this.router.navigate(['/Login']);
    // })

    let result = this.service.Register(myForm.form.value);
    result.subscribe((data:any)=>{
      if(data.error==null)
      {
        this.router.navigate(['/Login']);
      }
      else
    {
      console.log("Somthing Went to wrong");
    }
    });
  }

  ngOnInit() 
  {

  }

}
