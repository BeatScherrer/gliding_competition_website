import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
  UserCredential,
} from '@angular/fire/auth';
import { Observable, of, Subject } from 'rxjs';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new Subject<User | undefined>();

  constructor(private auth: Auth, private state: StateService) {
    auth.onAuthStateChanged(this.onAuthStateChange);
  }

  loginWithEmailAndPassword(email: string, password: string): void {
    this.state.setLoading(true);
    console.log('logging in with email...');
    signInWithEmailAndPassword(this.auth, email, password)
      .catch((e) => console.log(e))
      .then((user_credential: UserCredential | void) => {
        if (user_credential) {
          this.user$.next(user_credential.user);
        }
      });

    this.state.setLoading(false);
  }

  loginWithGoogle(): void {
    this.state.setLoading(true);
    signInWithPopup(this.auth, new GoogleAuthProvider()).then(
      (user_credential: UserCredential | void) => {
        if (user_credential) {
          const user = user_credential.user;
          console.log('asjdf;laskjdf');
          this.user$.next(user_credential.user);
        }
      }
    );
    this.state.setLoading(false);
  }

  logout() {
    console.log('loggin out');
    this.state.setLoading(true);
    this.auth.signOut();
    this.state.setLoading(false);
  }

  onAuthStateChange(value: any) {
    console.log(value);
  }
}
