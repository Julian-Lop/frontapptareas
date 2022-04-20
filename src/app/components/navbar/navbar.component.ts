import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sesion:any = localStorage.getItem('token') ? true : false

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
    this.isVerified()
    this.auth.dispatchData.subscribe(data => this.sesion=data?true:false)
  }

  async isVerified(){
    let temp = await this.auth.hasSession()
    this.sesion = temp
  }

  signOut(){
    localStorage.removeItem('token')
    this.sesion = !localStorage.getItem('token')?false : true
    this.router.navigate(['/'])
  }

}
