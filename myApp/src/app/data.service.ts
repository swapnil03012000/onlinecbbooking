import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(public http:HttpClient) { }



  
  private signUPURL = "http://localhost:55925/api/User/Registration";
  SignUpData(userObj)
  {
    return this.http.post(this.signUPURL,userObj);
  }

  private signinURL="http://localhost:55925/api/LogIn";
  SignIn(uobj)
  {
    return this.http.post(this.signinURL,uobj);
  }

  public LogHistory="http://localhost:55925/api/User";
  LogHis()
  {
    return this.http.get(this.LogHistory);
  }

  OTPGenerate(email)
  {
    alert("inside OTPGenerate ");
    var RUser={
      "EmailId":email,
      
     };

    return this.http.post(`http://localhost:55925/api/LogIn/IsExist`, RUser);
  }


  OTPValidate(otp,email)
  {
    
    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "OTP":otp
     };

   
     console.log(RUser);
    
    return this.http.post(`http://localhost:55925/api/LogIn/OTP`, RUser,);
  }


  Passwordreset(password,email)
  {

    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "Password":password,
      
     };

      console.log(RUser);
     
    return this.http.put(`http://localhost:55925/api/LogIn/UpdatePassword`, RUser);
  }

  

}

