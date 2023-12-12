import { signal } from '@preact/signals-react'

import type { Notification } from '@/models/system'

class Notifier {
  private notifications = signal<Notification[]>([])

  get() {
    return this.notifications.value
  }

  set(notifications: Notification[]) {
    this.notifications.value = notifications
  }

  push(notification: Notification) {
    const notifications = this.notifications.value

    this.notifications.value = [...notifications, notification]
  }

  pop(index: number) {
    const notifications = this.notifications.value

    this.notifications.value = notifications.splice(index, 1)
  }
}

export const NotificationSignal = new Notifier()