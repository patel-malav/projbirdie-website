import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(6)]],
    email: [null, [Validators.required, Validators.minLength(8), ValidatorService.emailValidator]],
    password: [null, [Validators.required, Validators.minLength(8)]],
    confirm: [null,[Validators.required, Validators.minLength(8)]],
    tnc: [false, Validators.requiredTrue]
  });
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.registerForm.valid) {
      this.authService.emailSignUp(this.registerForm.value.email, this.registerForm.value.password);
      this.registerForm.reset();
    }
  }
}
