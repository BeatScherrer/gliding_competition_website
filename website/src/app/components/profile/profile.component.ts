import { Component, OnInit } from '@angular/core';

import { IProfile } from '@models/profile';

// import { FirestoreService } from '@services/FirestoreService';

import { User } from '@angular/fire/auth';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { LoggerService } from '@services/logger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$ = new Subject<User | null>();
  vm$ = new BehaviorSubject<IProfile | null>(null);

  constructor(private logger: LoggerService, private auth: AuthService) {
    this.user$ = auth.user$;
  }

  ngOnInit(): void {
    this.user$.pipe(tap((user) => this.logger.info(JSON.stringify(user))));
  }
}
