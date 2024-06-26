import { createPinia } from 'pinia'
import type { App } from 'vue'

export function setupStore(app: App<Element>) {
  const store = createPinia()

  app.use(store)
}

export * from './modules'
