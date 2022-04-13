import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:any=''
  password:any=''

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const user = {Email:this.email,Clave:this.password}
    this.auth.signIn(user).subscribe(res => alert(res.message))
  }

}
