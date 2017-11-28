import App from './App.vue'
import Hello from './Hello.vue'
import PagedTable from './components/pagedTable.vue'
import Cache from './common/cache'
import Eventbus from './common/eventbus'
import Message from './common/message'


const KalixDefault = {
  install(Vue, params = {}) {
    Vue.component('KalixApp', App)
    Vue.component('KalixHello', Hello)
    Vue.component('KalixPagedTable', PagedTable)
  }
}

const KalixPagedTable = {
  install(Vue, params = {}) {
    Vue.component('KalixPagedTable', PagedTable)
  }
}

const KalixApp = {
  install(Vue, params = {}) {
    Vue.component('KalixApp', pagedTable)
  }
}

const KalixHello = {
  install(Vue, params = {}) {
    Vue.component('KalixHello', Hello)
  }
}

export {
  KalixDefault as default, KalixApp, KalixHello, KalixPagedTable,
  Cache, Eventbus, Message
}
