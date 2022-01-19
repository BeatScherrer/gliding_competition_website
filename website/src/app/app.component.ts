import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading$: BehaviorSubject<boolean>;

  constructor(private state: StateService) {
    this.loading$ = state.loading$
  }

  title = 'website';
}
