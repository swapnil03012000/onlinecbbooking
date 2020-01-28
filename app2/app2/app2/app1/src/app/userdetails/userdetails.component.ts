import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

 

    list:any;
    val:any;
  
    constructor(private service:RoleService, public router : Router) { }
  
    ngOnInit() 
    {
      console.log("Driver Component Loaded")
      let resultstate=this.service.UserDetails();
      console.log("Driver list"+resultstate);
      resultstate.subscribe((data:any)=>
      { 
        this.list = data;
        console.log(data);
        console.log("list"+this.list[0]);
        this.val=Array.from(data.T_Users);
      });
    }
  }


