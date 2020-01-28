import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  constructor(private http: HttpClient, private router : Router) { }


    cabdata()
    {
      console.log("User in service");
      return this.http.get("http://localhost:53806/api/AdminApi");
    }
}
