import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm,FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';
import Swal from 'sweetalert2';

class loginAuth{
  email:string = "karthick2335@gmail.com";
  password:string = "2335";
  termsCondition:boolean = true;
}

@Component({
  selector: 'app-forms-login',
  templateUrl: './forms-login.component.html',
  styleUrls: ['./forms-login.component.css']
})
export class FormsLoginComponent implements OnInit{
  
  validLogin:boolean = true;
  @Output() loginAuth = new EventEmitter<boolean>();

  constructor(private authLogin:LoginAuthService,private _router:Router){
  }
  onSubmit(form:NgForm)
  {
    let loginObj = new loginAuth();
    this.validLogin = loginObj.email == form.value.email && loginObj.password == form.value.password && loginObj.termsCondition == form.value.termscondition;
    this.loginAuth.emit(this.validLogin);
    if(this.validLogin)
    {
      Swal.fire({  
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        icon: 'success',
        timer: 2000,
        title: 'Signed in successfully',
        })   
      this.authLogin.changeData('Y');
      sessionStorage.setItem('authLogin','Y');
      this._router.navigateByUrl('/dashboard');
    }
    else{
      Swal.fire({  
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      icon: 'warning',
      timer: 2000,
      title: 'Signed in Failed',
      })   
      this.authLogin.changeData('N');
      sessionStorage.setItem('authLogin','N');
    }
  }
  dismiss(){
    this.validLogin = true;
  }
  ngOnInit(): void {
    
  }
  getValue(f:any)
  {
    
  }
}
