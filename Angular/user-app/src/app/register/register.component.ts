import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  constructor(private router: Router){}

  registerUser(){

  // Remove extra spaces
  this.name = this.name.trim();
  this.email = this.email.trim();
  this.password = this.password.trim();

  // Check empty fields
  if(
    this.name === '' ||
    this.email === '' ||
    this.password === ''
  ){
    alert("All fields are required");
    return;
  }

  const user = {

    name: this.name,
    email: this.email,
    password: this.password

  };

  localStorage.setItem(
    'user',
    JSON.stringify(user)
  );

  alert("Registration Successful");

  this.router.navigate(['/login']);

}

}