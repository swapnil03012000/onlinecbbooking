import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { detectChangesInternal } from '@angular/core/src/render3/instructions';
import { DataService } from '../dataservice.service';

@Component({
  selector: 'app-map-data',
  templateUrl: './map-data.component.html',
  styleUrls: ['./map-data.component.css']
})
export class MapDataComponent implements OnInit {
data:string;
mapdata:string[];
a:any;
b:any;
c:any;
d:any;
e:Number;
  constructor(public routes: ActivatedRoute,private service:DataService) { }

  ngOnInit() {

    debugger
    this.routes.queryParams.subscribe(params => {
      this.data = this.routes.snapshot.params.QueryString
      console.log(this.data);
      this.mapdata=this.data.split("|");
      // console.log(this.mapdata[0]);
      // console.log(this.mapdata[1]);
      // console.log(this.mapdata[2]);
this.a=this.mapdata[0];
this.b=this.mapdata[1];
this.c=this.mapdata[2];
//console.log(this.a);
//console.log(this.b);
//console.log(this.c);
let x = this.a.split(" ");
this.d=x[0];
this.e=parseFloat(this.d);

  console.log(this.e);    
this.service.JourneyDetails(this.e,this.b,this.c).subscribe((res)=>{

  console.log(res)
},(error)=>
{
  console.log(error);
  
})


  });

  
   
  }

 
  

}
