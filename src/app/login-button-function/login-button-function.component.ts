import { Component } from '@angular/core';

@Component({
  selector: 'app-login-button-function',
  templateUrl: './login-button-function.component.html',
  styleUrls: ['./login-button-function.component.css'],
})
export class LoginButtonFunctionComponent {
  username: string = '';
  password: string = '';
  isLocked: boolean = false; 
  message: string = '';

  onLogin() {
    if (this.username && this.password) {
      this.message = 'Login successful!';
    } else {
      this.message = 'Please enter your credentials.';
    }
  }
}
