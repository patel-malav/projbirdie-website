import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validator/validator.service';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.registerForm.reset();
    }
  }
}
