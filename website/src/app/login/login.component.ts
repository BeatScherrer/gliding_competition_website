import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.loginFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required],
      passwordCtrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log("not implemented yet");
  }

}
