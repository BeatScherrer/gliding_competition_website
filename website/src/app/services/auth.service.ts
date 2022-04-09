import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
  UserCredential,
} from '@angular/fire/auth';
import { INotification, NotificationLevel } from '@models/Notification';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from './notification.service';
import { ApplicationState, StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User | null>(null);
  state$ = new BehaviorSubject<ApplicationState>(new ApplicationState());

  constructor(
    private auth: Auth,
    private stateService: StateService,
    private notificationService: NotificationService
  ) {
    this.state$ = stateService.state$;
    this.user$.next(auth.currentUser);

    auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        this.stateService.setLoggedIn(true);

        if (user.displayName) {
          const notification = {
            title: 'Welcome',
            message: user.displayName,
            level: NotificationLevel.INFO,
          };
          this.notificationService.push(notification);
        }
      } else {
        const notification: INotification = {
          title: 'Goodbye',
          level: NotificationLevel.INFO,
        };
        this.notificationService.push(notification);

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
