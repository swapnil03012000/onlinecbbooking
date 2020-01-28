import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private router : Router) { }


AllDriver()
{
  return this.http.get("http://localhost:53806/api/Role/1001");
}

UserDetails()
{
  return this.http.get("http://localhost:53806/api/Role/1002");
}
}

