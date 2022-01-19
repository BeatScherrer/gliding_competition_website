import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  constructor(private state: StateService, private auth: AuthService) {}

  ngOnInit(): void {}

  setLoading() {
    console.log('set loading true');
    this.state.setLoading(true);
  }

  loginWithEmail() {
    // login with a simple test user to test firebase
    this.auth.loginWithEmailAndPassword('test@test.test', '123456');
  }
}
