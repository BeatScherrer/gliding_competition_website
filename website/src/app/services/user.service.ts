import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Users } from '@models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users$ = new Observable<Users>();

  constructor(firestore: Firestore) {
    const users_collection: any = collection(firestore, 'users');
    this.users$ = collectionData(users_collection);

    this.users$.subscribe((value) => console.log(value));
  }
}
