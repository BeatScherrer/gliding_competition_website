import { Component, OnInit } from '@angular/core';

import { Profile } from '@models/profile';

import { FirestoreService } from '@services/FirestoreService';

import { User } from '@angular/fire/auth';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$ = new BehaviorSubject<User | null>(null);

  vm$!: Subject<Profile>;

  constructor(private firestoreService: FirestoreService) {
    this.vm$ = this.firestoreService.getProfile();
  }

  ngOnInit(): void {}
}
