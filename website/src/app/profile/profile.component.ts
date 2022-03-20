import { Component, OnInit } from '@angular/core';
import { Profile } from '@models/profile';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  vm$!: Subject<Profile>;

  constructor(private firestoreService: FirestoreService) {
    this.vm$ = this.firestoreService.getProfile()
  }

  ngOnInit(): void {
  }

}
