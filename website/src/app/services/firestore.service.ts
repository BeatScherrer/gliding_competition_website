import { Injectable } from '@angular/core';

import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { Observable, tap, map } from 'rxjs';

import { IProfile } from '@models/profile';
import { ISponsor } from '@models/sponsor';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private profilesPath = "/profiles";
  private sponsorsPath = "/sponsors";

  profiles$: Observable<IProfile[]>;
  sponsors$: Observable<ISponsor[]>;

  constructor(firestore: Firestore) {
    const profile_collection = collection(firestore, this.profilesPath);
    const sponsors_collection = collection(firestore, this.sponsorsPath);

    this.profiles$ = collectionData(profile_collection) as Observable<IProfile[]>;
    this.sponsors$ = collectionData(sponsors_collection) as Observable<ISponsor[]>;

    // this.profilesCollection$.pipe(tap(value => console.log(value)));

    // this.profiles$ = collectionData(profile_collection).pipe(map(data => {
    //   return {
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     email: data.email,
    //     glidingGroup: data.glidingGroup,
    //     glider: data.glider
    //   };
    // }));
  }

}
