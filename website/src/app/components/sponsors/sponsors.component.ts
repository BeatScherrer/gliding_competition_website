import { Component, OnInit } from '@angular/core';
import { ISponsor } from '@models/sponsor';
import { FirestoreService } from '@services/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  sponsorsvm$ = new Observable<ISponsor[]>();

  constructor(private firestore: FirestoreService) {
    this.sponsorsvm$ = firestore.sponsors$;
  }

  ngOnInit(): void {
  }

}
