import { Injectable } from '@angular/core';

import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { Observable, tap, map } from 'rxjs';

import { IProfile } from '@models/profile';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private profilesPath = "/profiles";

  profiles$: Observable<IProfile[]>;

  constructor(firestore: Firestore) {
    const profile_collection = collection(firestore, this.profilesPath);

    this.profiles$ = collectionData(profile_collection) as Observable<IProfile[]>;

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
