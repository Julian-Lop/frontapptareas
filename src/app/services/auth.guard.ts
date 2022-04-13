import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  respuesta:any = []

  

  constructor(private auth: AuthService, private router:Router){

  }

  async canActivate(){ 
    let temp = await this.auth.hasSession()
    if(!temp)this.router.navigate(['/'])
    return temp
  }
}
