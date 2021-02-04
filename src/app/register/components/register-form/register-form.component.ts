import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterForm} from '../../models';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private registerService: RegisterService, private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new FormControl(''),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  clickSignUp(): void {
    const user = {
          username: this.registerForm.controls.username.value,
          email: this.registerForm.controls.username.value,
          password: this.registerForm.controls.username.value
    };
    this.registerService.registerUser(user).subscribe(data => {
      console.log(data);
    });
  }

}