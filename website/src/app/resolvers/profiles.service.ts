import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import { IProfile } from '@models/profile';
import { FirestoreService } from '@services/firestore.service';
import { NotificationService } from '@services/notification.service';
import { map, Observable } from 'rxjs';

interface IReturn {
  profiles: IProfile[];
}

@Injectable({
  providedIn: 'root',
})
export class ProfilesService implements Resolve<IProfile[]> {
  constructor(
    private firestore: FirestoreService,
    private notificationService: NotificationService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IReturn> {
    return this.firestore.profiles$.pipe(
      map((profiles) => {
        return profiles;
      })
    );
    // .catchError((error) => {
    //   const notification: INotification = {
    //     title: 'Error',
    //     message: error.message,
    //     level: NotificationLevel.ERROR,
    //   };
    //   this.notificationService.push(notification);
    //   return throwError(() => new Error(error.message));
    // }),
    // );
  }
}
