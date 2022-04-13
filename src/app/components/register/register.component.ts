import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string= ''
  email:string= ''
  password: string= ''
  message:any = ''

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.name && this.email && this.password){
      let usertemp = {
        Nombre:this.name,
        Email:this.email,
        Clave:this.password
      }
      this.auth.userRegister(usertemp).subscribe(res => {
        alert(res.message)
        if(res.creado){
          this.name = ''
          this.email = ''
          this.password = ''
          this.router.navigate(['signin'])
        }
      })
    }
  }
}
