import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
  UserCredential,
} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { ApplicationState, StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User | undefined>(undefined);
  state$ = new BehaviorSubject<ApplicationState>(new ApplicationState());

  constructor(private auth: Auth, private stateService: StateService) {
    auth.onAuthStateChanged(this.onAuthStateChange);
    this.state$ = stateService.state$;
  }

  loginWithEmailAndPassword(email: string, password: string): void {
    this.stateService.setLoading(true);
    console.log('logging in with email...');
    signInWithEmailAndPassword(this.auth, email, password)
      .catch((e) => console.log(e))
      .then((user_credential: UserCredential | void) => {
        if (user_credential) {
          this.user$.next(user_credential.user);
          this.stateService.setLoggedIn(true);
        }
        this.stateService.setLoading(false);
      });
  }

  loginWithGoogle(): void {
    this.stateService.setLoading(true);
    signInWithPopup(this.auth, new GoogleAuthProvider()).then(
      (user_credential: UserCredential | void) => {
        if (user_credential) {
          this.user$.next(user_credential.user);
          this.stateService.setLoggedIn(true);
        }

        this.stateService.setLoading(false);
      }
    );
  }

  logout() {
    console.log('loggin out');
    this.stateService.setLoading(true);
    this.auth.signOut();
    this.stateService.setLoading(false);
    this.stateService.setLoggedIn(false);
  }

  onAuthStateChange(user: User | null) {
    if (user != null) {
      console.log(`user: ${JSON.stringify(user)}`);
      this.user$.next(user);
      this.stateService.setLoggedIn(true);
    } else {
      this.user$.next(undefined);
      this.stateService.setLoggedIn(false);
    }
  }
}
