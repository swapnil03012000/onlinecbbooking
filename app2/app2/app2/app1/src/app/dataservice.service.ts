import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService 
{


  DeleteUser(UserId) 
  {
    return this.http.delete("http://localhost:53806/api/User/"+UserId);
  }

  login(value: any) {
    throw new Error("Method not implemented.");
  }
  router: any;

  constructor( private http:HttpClient) { }

   PassData()
  {
    console.log("in servive.is file ")
    return this.http.get("http://localhost:53806/api/Login/PassHistory");
  }

  AllUser()
  {
    console.log("is service file")
    return this.http.get("http://localhost:53806/api/User");
  }

  Logout()
  {
    sessionStorage.setItem("isloggedIn", "0");
    this.router.navigate(['/signIn']);
  }


  OTPGenerate(email)
  {
    alert("inside OTPGenerate ");
    var RUser={
      "EmailId":email,
      
     };

    return this.http.post("http://localhost:53806/api/Login/IsExist", RUser);
  }
  OTPValidate(otp,email)
  {
    
    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "OTP":otp
     };

   
     console.log(RUser);
    
    return this.http.post("http://localhost:53806/api/Login/OTP", RUser,);
  }

  Passwordreset(password,email)
  {

    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "Password":password,
      
     };

      console.log(RUser);
     
       return this.http.put("http://localhost:53806/api/Login/UpdatePassword", RUser);
  }

  JourneyDetails(e,b,c)
  {
    var Jorney={
      "Source":b,
      "Destination":c,
      "TotalDistance":e
      
     };
     return this.http.post("http://localhost:53806/api/AdminAPI/Map",Jorney);

    
  }
}
