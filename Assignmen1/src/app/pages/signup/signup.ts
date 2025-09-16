import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class Signup {
  signupForm = {
    name: '',
    email: '',
    password: '',
  };

  onSignupSubmit() {
    console.log('Signup submitted:', this.signupForm);
    // Add your signup logic here
  }
}
