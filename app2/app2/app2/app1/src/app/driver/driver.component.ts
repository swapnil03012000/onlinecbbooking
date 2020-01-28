import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  list: any;
  val: any;

  constructor(private service:RoleService, public router : Router) { }

  ngOnInit() 
  {
    console.log("Driver Component Loaded")
    let resultstate=this.service.AllDriver();
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
