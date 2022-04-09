import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { FirestoreService } from '@services/firestore.service';

import { Observable } from 'rxjs';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';

interface IReturn {
  records: any,
}

@Injectable({
  providedIn: 'root'
})
export class RecordCompService implements Resolve<IReturn> {

  constructor(private firestore: FirestoreService, private _ngAlert: NgAlertService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IReturn | Observable<IReturn> | Promise<IReturn> {
    const withError = route.params['with-error'] === 'true';

    return Observable.forkJoin([
      this.firestore.
    ]).map(results => ({

    }))
    .catch(error => {
      this._ngAlert.push({
        message: error.message,
        type: MessageType.error
      });

      return Observable.throw(error);
    })

  }
}
