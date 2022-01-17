import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public auth: AngularFireAuth) {
    this.loginFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required],
      passwordCtrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(): void {
  }

  loginWithGoogle(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(): void {
    this.auth.signOut();
  }

}
