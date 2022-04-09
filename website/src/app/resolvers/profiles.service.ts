import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FirestoreService } from '@services/firestore.service';
import { Resolver } from 'dns';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService implements Resolver {

  constructor(private firestore: FirestoreService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    return this.firestore.profiles$.pipe(
      catchError(error => this._ngAlert.push({
        message: error.message,
        type: MessageType.error
      }))
    );
  }
}
