import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { AsyncValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session : any = []
  response : any

  constructor(private http:HttpClient) { }

  userRegister(user:object):Observable<any>{
    let temp =  this.http.post<any>(`${environment.url}registro`,user)
    return temp
  }

  signIn(user:object):Observable<any>{
    let temp = this.http.post<any>(`${environment.url}logueo`,user)
    temp.subscribe(user => {
      this.session.push(user)
      user.token ? localStorage.setItem('token', user.token) : null
    })
    return temp
  }

  async hasSession():Promise<any>{
    let token:any = localStorage.getItem('token')
    let temp = await lastValueFrom(this.http.get<any>(`${environment.url}sesion`, {headers:{'x-access-token':token}}))
    let other = temp.status == 'ok' ? true : false
    return other
  }
 
}
