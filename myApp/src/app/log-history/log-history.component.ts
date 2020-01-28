import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.css']
})
export class LogHistoryComponent implements OnInit {

  constructor(public service:DataService) { }

  ngOnInit() {
  }

//   LogHistory()
//   {
//     let result = this.service.LogHis();
// result.subscribe((fetchetdata:any)=>{
//   if (data.error == null)
//   {
//     console.log(fetchetdata.userid);
//     console.log(fetchetdata.data.emailId);
//     console.log(fetchetdata.data.Old);
    
//   } else {
//     console.log("something wrong");
    
//   }
//})


}
