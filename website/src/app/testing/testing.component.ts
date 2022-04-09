import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { BehaviorSubject, delay, Subject } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { StateService, ApplicationState } from '@services/state.service';
import { NotificationService } from '@services/notification.service';
import { INotification } from '@models/Notification';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  state$: BehaviorSubject<ApplicationState> =
    new BehaviorSubject<ApplicationState>(new ApplicationState());
  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  notifications$: Subject<INotification[]>;

  constructor(
    private stateService: StateService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
    this.state$ = stateService.state$;
    this.user$ = authService.user$;
    this.notifications$ == notificationService.notifications$;
  }

  ngOnInit(): void {}

  setLoading() {
    this.stateService.setLoading(true);
  }

  loginWithEmail() {
    // login with a simple test user to test firebase
    this.authService.loginWithEmailAndPassword('test@test.test', '123456');
  }

  logout() {
    this.authService.logout();
  }
}
