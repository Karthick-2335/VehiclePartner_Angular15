import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoginAuthService } from './services/login-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularTemp';
  isLogin?:string;
  modal:string = 'none';
  Role:string = "Admin";
  isExpandProduct:boolean = false;
  isExpandEmployee:boolean = false;
  isExpandBranch:boolean = false;
  constructor(private authLogin:LoginAuthService,private _router:Router){

  }
  modalOpen(){
    this.modal = 'block';
  }
  modalClose(){
    this.modal = 'none';
  }
  ngOnInit(): void {
    this.authLogin.data$.subscribe(res => {this.isLogin = res})
    this.isLogin = sessionStorage.getItem('authLogin')?.toString();
  }
  loggedOut()
  {
    this.isLogin = 'N';
    sessionStorage.clear();
    this._router.navigateByUrl('/formsLogin');
  }
  expand(data:string)
  {
    if(data == "Product")
    {
      if(this.isExpandProduct){
        this.isExpandProduct = false;
      }
      else {
        this.isExpandProduct = true;
      }
    }
    else if(data == "Employee")
    {
      if(this.isExpandEmployee){
        this.isExpandEmployee = false;
      }
      else {
        this.isExpandEmployee = true;
      }
    }
    else if(data == "Branch")
    {
      if(this.isExpandBranch){
        this.isExpandBranch = false;
      }
      else {
        this.isExpandBranch = true;
      }
    }
  }
}
