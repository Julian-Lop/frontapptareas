import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email:any=''
  password:any=''

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const user = {Email:this.email,Clave:this.password}
    this.auth.signIn(user).subscribe(res => {
      alert(res.message);
      if(res.auth){
        this.auth.dispatchData.emit(localStorage.getItem('token'))
        this.router.navigate(['/privateroutes'])
      }
    })
  }

}
