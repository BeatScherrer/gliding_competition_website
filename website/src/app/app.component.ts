import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RM Dittingen';

  loading$: BehaviorSubject<boolean>;
  user$ = new Subject<User | undefined>();

  constructor(private state: StateService, private auth: AuthService) {
    this.loading$ = state.loading$;
    this.user$ = auth.user$;
  }

  finishLoading() {
    this.loading$.next(false);
  }

  logout() {
    this.auth.logout();
  }
}
