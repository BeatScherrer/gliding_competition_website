import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


export class ApplicationState {
  public loading: boolean;
  public loggedIn: boolean;
  public isHandset: boolean;

  constructor() {
    this.loading = false;
    this.loggedIn = false;
    this.isHandset = true;
  }
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  applicationState = new ApplicationState();
  state$ = new BehaviorSubject<ApplicationState>(this.applicationState);

  private breakpointObserver: BreakpointObserver;

  constructor(breakpointObserver: BreakpointObserver) {
  this.breakpointObserver = breakpointObserver;

  this.breakpointObserver.observe(Breakpoints.Handset)
    .subscribe( (value: any) => {
      // this.setHandset(value);
    });
  }

  setLoading(value: boolean) {
    console.log(`setting loading to ${value}`);
    this.applicationState.loading = value;
    this.state$.next(this.applicationState);
  }

  setLoggedIn(value: boolean) {
    console.log(`setting logged in to: ${value}`);
    this.applicationState.loggedIn = value;
    this.state$.next(this.applicationState);
  }

  setHandset(value: boolean) {
    console.log(`setting handset to: ${value}`);
    this.applicationState.isHandset = value;
    this.state$.next(this.applicationState);

  }
}
