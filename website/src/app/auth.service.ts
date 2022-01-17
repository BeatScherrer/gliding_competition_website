import { Injectable } from '@angular/core';
import {Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, UserCredential } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {
    auth.onAuthStateChanged(this.onAuthStateChange)
  }

  loginWithEmailAndPassword(email: string, password: string): any{
    console.log("logging in with email...")
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle(): any {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

  onAuthStateChange(value: any) {
    console.log(value);

  }
}
