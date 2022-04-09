import { Component, Input, OnInit } from '@angular/core';
import { INotification } from '@models/Notification';
import { NotificationService } from '@services/notification.service';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() notification!: INotification;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    timer(5000).subscribe(() => {
      this.closeNotification(this.notification);
    });
  }

  closeNotification(notification: INotification) {
    this.notificationService.remove(notification);
  }
}
