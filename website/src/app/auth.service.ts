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
  user$ = new BehaviorSubject<User | null>(null);
  state$ = new BehaviorSubject<ApplicationState>(new ApplicationState());

  constructor(private auth: Auth, private stateService: StateService) {
    this.state$ = stateService.state$;
    this.user$.next(auth.currentUser);

    auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        this.stateService.setLoggedIn(true);
      } else {
        this.stateService.setLoggedIn(false);
      }
      this.user$.next(user);
    });
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
    this.auth.signOut();
  }
}
