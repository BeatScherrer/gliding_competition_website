import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading: boolean;

  constructor(private state: StateService) {
    this.loading = this.state.loading;
  }

  title = 'website';
}
