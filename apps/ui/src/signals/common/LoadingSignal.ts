import type { Signal } from '@preact/signals-react'
import { signal } from '@preact/signals-react'

class Loader {
  private loading: Signal<boolean> = signal(false)

  get() {
    return this.loading.value
  }

  set(isLoading: boolean) {
    this.loading.value = isLoading
  }
}

export const LoadingSignal = new Loader()