import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.minLength(8), ValidatorService.emailValidator]],
    password: [null, [Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.authService.emailSignIn(this.loginForm.value.email, this.loginForm.value.password);
      this.loginForm.reset();
    }
  }
}
