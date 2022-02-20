import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import { AuthService } from '../auth.service';
import { StateService, ApplicationState } from '../state.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {

  state$: BehaviorSubject<ApplicationState> = new BehaviorSubject<ApplicationState>(new ApplicationState());

  constructor(private stateService: StateService, private authService: AuthService) {
    this.state$ = stateService.state$;
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
