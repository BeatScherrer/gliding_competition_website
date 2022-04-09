export interface NotificationData {
  onActionClick: Function;
}

export enum NotificationLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export interface INotification {
  title: string;
  message?: string;
  data?: NotificationData;
  level: NotificationLevel;
}
