import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router){}

  loginUser(){

    const storedUser = JSON.parse(
      localStorage.getItem('user') || '{}'
    );

    if(
      this.email === storedUser.email &&
      this.password === storedUser.password
    ){

      alert("Login Successful");

      this.router.navigate(['/profile']);

    }
    else{

      alert("Invalid Credentials");

    }

  }

}