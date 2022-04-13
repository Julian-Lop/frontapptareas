import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sesion:any = localStorage.getItem('token')

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.dispatchData.subscribe(data => this.sesion=data)
  }

  signOut(){
    localStorage.removeItem('token')
    this.sesion = localStorage.getItem('token')
    this.router.navigate(['/'])
  }

}
