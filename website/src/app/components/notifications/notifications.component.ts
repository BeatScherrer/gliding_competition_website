import { Component, OnInit } from '@angular/core';
import { INotification } from '@models/Notification';
import { NotificationService } from '@services/notification.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications$: Subject<INotification[]>;

  constructor(private notifications: NotificationService) {
    this.notifications$ = notifications.notifications$;
    console.log("test");

    this.notifications$.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
