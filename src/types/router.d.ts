import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    image?: string
  }
}
