import App from './App.vue'
import Hello from './Hello.vue'
import PagedTable from './components/pagedTable.vue'
import Dialog from './components/baseDialog.vue'
import BaseTable from './components/baseTable.vue'
import BaseSearch from './components/baseSearch.vue'
import DatePicker from './components/baseUpload'
import BaseDictSelect from './components/biz/date/datepicker'
import BaseUpload from './components/baseDictSelect'
import BaseQrcode from './components/baseQrcode'
import Cache from './common/cache'
import EventBus from './common/eventbus'
import Message from './common/message'
import Util from './common/util'

const KalixDefault = {
  install(Vue, params = {}) {
    Vue.component('KalixApp', App)
    Vue.component('KalixHello', Hello)
    Vue.component('KalixPagedTable', PagedTable)
    Vue.component('KalixDialog', Dialog)
    Vue.component('BaseTable', BaseTable)
    Vue.component('KalixSearch', BaseSearch)
    Vue.component('KalixUpload', BaseUpload)
    Vue.component('KalixQrcode', BaseQrcode)
    Vue.component('KalixDictSelect', BaseDictSelect)
    Vue.component('KalixDatePicker', DatePicker)
  }
}

const KalixPagedTable = {
  install(Vue, params = {}) {
    Vue.component('KalixPagedTable', PagedTable)
  }
}

const KalixDialog = {
  install(Vue, params = {}) {
    Vue.component('KalixDialog', Dialog)
  }
}

const KalixApp = {
  install(Vue, params = {}) {
    Vue.component('KalixApp', PagedTable)
  }
}

const KalixHello = {
  install(Vue, params = {}) {
    Vue.component('KalixHello', Hello)
  }
}

export {
  KalixDefault as default, KalixApp, KalixHello, KalixPagedTable, KalixDialog,
  Cache, EventBus, Message, Util
}
