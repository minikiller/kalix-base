import App from './App.vue'
import Hello from './Hello.vue'

export default {
  install (Vue, params = {}) {
    Vue.component('KalixApp', App)
    Vue.component('KalixHello', Hello)
  }
}
