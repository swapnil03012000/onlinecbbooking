import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookcar',
  templateUrl: './bookcar.component.html',
  styleUrls: ['./bookcar.component.css']
})
export class BookcarComponent implements OnInit {

  constructor(private router:Router) {
    
   }

  ngOnInit() {
    // this.router.navigate(['http://localhost:4201/']);
  }

}
