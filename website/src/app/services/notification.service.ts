import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { INotification, NotificationLevel } from '@models/Notification';
import { Subject } from 'rxjs';
import { LoggerService } from './logger.service';

interface NotificationConfig {
  duration: number;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications$ = new Subject<INotification[]>();
  notifications: INotification[] = [];

  config: NotificationConfig = {
    duration: 5.0,
  };

  constructor(
    private logger: LoggerService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.notifications.push({
      title: 'test',
      message: 'test notifications',
      data: {
        onActionClick: () => {
          console.log('test');
        },
      },
      level: NotificationLevel.INFO,
    });

    this.notifications$.next(this.notifications);
  }

  push(notification: INotification) {
    this.notifications.push(notification);

    this.notifications$.next(this.notifications);
  }

  remove(notification: INotification) {
    const index = this.notifications.indexOf(notification);
    if (index > -1) {
      this.notifications.splice(index, 1);
    } else {
      this.logger.error(`could not find notification: ${notification}`);
    }

    this.notifications$.next(this.notifications);
  }

  openSnackBar(notification: INotification) {
    this.snackBar.open(notification.message, '', {
      duration: this.config.duration,
      panelClass: [''],
    });
  }
}
