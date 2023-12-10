export type NotificationStatus = 'error' | 'success' |'warning' | 'info'

export type Notification = {
  status: NotificationStatus;
  title: string;
  description?: string;
};