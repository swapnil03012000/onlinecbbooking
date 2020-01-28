import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passhistory',
  templateUrl: './passhistory.component.html',
  styleUrls: ['./passhistory.component.css']
})
export class PasshistoryComponent implements OnInit {
 
  passlog;
  message;
  constructor(private service: DataService,  public router : Router) 
  { 
   // console.log("Home.Component.JS: Home Component Created");fgop
  }

  ngOnInit() 
  {
    console.log("Home Component Loaded")
    let resultstate=this.service.PassData();
    resultstate.subscribe((data)=>{ this.passlog = data;
      console.log(this.passlog);
    });
  }

}
