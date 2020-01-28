import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  alluser;
  message;
  val;

  constructor(private service: DataService, private esrvice:LoginService, public router : Router) 
  { 
   // console.log("Home.Component.JS: Home Component Created");
  }

  ngOnInit() 
  {
    console.log("Home Component Loaded")
    let resultstate=this.service.AllUser();
    
    resultstate.subscribe((data)=>{ this.alluser = data;
      console.log(this.alluser);
       this.val = Array.from(this.alluser.Data);
      console.log(this.val);
    });
  }

  Delete(userid)
  {
    alert(userid);
    //console.log(data);
    let statusOfDelete= this.service.DeleteUser(userid);
    statusOfDelete.subscribe((result:any)=>{
      if(result.affectedRows>0)
      {
        this.router.navigate(['/AllUser']);
      }
      else
      {
        this.message = "Something went wrong!";
      }
    });
  }

}
