import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CabService } from '../cab.service';

@Component({
  selector: 'app-cabbook',
  templateUrl: './cabbook.component.html',
  styleUrls: ['./cabbook.component.css']
})
export class CabbookComponent implements OnInit {
  cabroutes:any;
  val:any;

  constructor(private service: CabService, public router : Router) { }

  ngOnInit() 
   {
  //   console.log("Home Component Loaded")
  //   let resultstate=this.service.cabdata();
    
  //   resultstate.subscribe((data)=>{ this.cabroutes = data;
  //     console.log(this.cabroutes);
  //      this.val = Array.from(this.cabroutes.Data);
  //     console.log(this.val);
  //   });




    // ---------------------------------------------------------------------------------------------------------

    console.log("Home Component Loaded")
    let resultstate=this.service.cabdata();
    resultstate.subscribe((data)=>{ this.cabroutes = data;
      console.log(this.cabroutes);
      // this.val=Array.from(this.cabroutes.Data);
      // console.log(this.val);
    });

  }

}
