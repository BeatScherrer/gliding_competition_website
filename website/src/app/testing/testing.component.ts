import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor(private state: StateService) { }

  ngOnInit(): void {
  }

  setLoading(value: boolean) {
    this.state.setLoading(value);
  }

}
