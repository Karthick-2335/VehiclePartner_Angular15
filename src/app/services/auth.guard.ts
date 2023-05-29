import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private route:Router){

  }
  canActivate(){
    if(this.auth.isLoggedIn()=="Y"){
      return true;
    }
    Swal.fire({  
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      icon: 'warning',
      timer: 2000,
      title: 'You have not Loggedin..',
      })   
    this.route.navigate(['formsLogin']);
    return false;
  }
  
}
