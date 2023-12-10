import { signal } from '@preact/signals-react'

import type { Notification } from '@/models/system'

class Notifier {
  private notification = signal<Notification | null>(null)

  get() {
    return this.notification.value
  }

  set(setting: Notification | null) {
    this.notification.value = setting
  }
}

export const NotificationSignal = new Notifier()