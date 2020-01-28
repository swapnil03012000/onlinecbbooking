import { Component, OnInit } from '@angular/core';
// import { DataService } from '../dataservice.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
//import { NgModule } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // message:string;
  // Password: string;
  // EmailId: string;
  // loginService: any;
  // router: any;
  UserId:any;
  constructor(public service:LoginService, public router:Router,private translateService: TranslateService) {
    translateService.addLangs(["en", "ge", "hi"]);
    translateService.setDefaultLang("en");
    this.router = router;
   }

  

  ngOnInit() {  }


  switchLanguage(language: string) {
    this.translateService.use(language);
  }

  login(userObj)
  {

    console.log(userObj.form.value);
    let resultset = this.service.login(userObj.form.value);
   
    resultset.subscribe((res:any)=>
    {
      console.log(res);
      if(res.Status=="Success")
      {
        window.alert("Login ok");
      var abc =res.Data.RoleId__;
      sessionStorage.setItem("UserSession",this.UserId);
      console.log(abc);

      // var abc = data['RoleId'];
      
      if(abc == 1000)
      {
        console.log("Admin")
        this.router.navigate(['/Admin']);
      }
      else 
      if(abc == 1001)
      {
        console.log("Driver");
        this.router.navigate(['/DriverDetails']);
      }
      else
      {
        console.log("Customer");
        this.router.navigate(['/Customer']);
      }
    }
    else{

      alert("Incorrect Emailid or password");
    }
    })
  }

  //  this.service.DeleteUser(UserId).subscribe((response)=>{
  //    this.DeleteUser = response;
  //  });
   
   
  //  (response => {
  //    console.log(response);

  //    const result = response.json();
  //      alert('User Deleted Successfully');
  //      this.DeleteUser();    
  //  });
  }



// ngOnInit() 
//   {
//     console.log("Home Component Loaded")
//     let resultstate=this.service.PassData();
//     resultstate.subscribe((data)=>{ this.passlog = data;
//       console.log(this.passlog);
//     });
//   }