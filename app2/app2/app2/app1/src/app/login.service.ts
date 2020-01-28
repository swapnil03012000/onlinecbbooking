import { Injectable } from '@angular/core';
import { Http,RequestOptions ,Headers} from '@Angular/http';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  constructor (private http: HttpClient, private router : Router){}  

login(user)
{
  console.log("User in service"+user);
  return this.http.post("http://localhost:53806/api/User/Login",user);
}

// DeleteUser(UserId)
// {
//   return this.http.delete("http://localhost:53806/api/User" + UserId);
// }



    Register(user)
    {
      console.log("in Service");
      console.log(user);
      return this.http.post("http://localhost:53806/api/User/Registration",user);
    }

}
