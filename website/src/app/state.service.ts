import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  loading: boolean = true;

  constructor() { }

  setLoading(value: boolean) {
    this.loading = value;
  }
}
