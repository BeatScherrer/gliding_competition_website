import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { ApplicationState, StateService } from '@services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RM Dittingen';

  state$ = new BehaviorSubject<ApplicationState>(new ApplicationState());
  user$ = new Subject<User | undefined>();

  constructor(private state: StateService, private auth: AuthService) {
    this.state$ = state.state$;
  }

  finishLoading() {
    this.state.setLoading(false);
  }

  logout() {
    this.auth.logout();
  }
}
