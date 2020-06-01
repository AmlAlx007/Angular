import { SignupService } from './signup.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  password:string; confirmPassword:string; signupService:SignupService;
  public success:boolean;

  constructor(signupService:SignupService) {
    this.signupService=signupService;
    this.success=false;
   }

  ngOnInit(): void {
  }

  SubmitAction(form: NgForm)
  {
      if(this.PasswordCheck())
        this.signupService.PostRegistration(JSON.stringify(form.value))
            .subscribe(response => {
              console.log(response);
              this.success=true;
            },
            error =>{console.error("Eror");
            this.success=false;
          });
          
  }

  PasswordCheck(){
      if(this.confirmPassword.length!=0 && this.password!=this.confirmPassword)
      {
        console.log(this.password," ",this.confirmPassword," ")
        document.getElementById("Error").innerHTML="Password not Matching";
        return 0
      }
      document.getElementById("Error").innerHTML="";
      return 1

  }


}
