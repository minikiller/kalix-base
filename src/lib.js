import App from './App.vue'
import Hello from './Hello.vue'
import PagedTable from './components/pagedTable.vue'
import Dialog from './components/baseDialog.vue'
import BaseTable from './components/baseTable.vue'
import BaseSearch from './components/baseSearch.vue'
import DatePicker from './components/baseUpload'
import BaseDictSelect from './components/biz/date/datepicker'
import BaseUpload from './components/baseDictSelect'
import BaseDict from './components/biz/dict/basedict'
import basedictAdd from './components/biz/dict/basedictAdd'
import basedictSearch from './components/biz/dict/basedictSearch'
import basedictView from './components/biz/dict/basedictView'
import BaseQrcode from './components/baseQrcode'
import Header from './views/header/header'
import Home from './views/home/home'
import Login from './views/login/login'
import Navigator from './views/navigator/navigator'
import Welcome from './views/welcome'
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

    Vue.component('KalixBaseDict', BaseDict)
    Vue.component('basedictAdd', basedictAdd)
    Vue.component('basedictSearch', basedictSearch)
    Vue.component('basedictView', basedictView)

    Vue.component('KalixHeader', Header)
    Vue.component('KalixHome', Home)
    Vue.component('KalixLogin', Login)
    Vue.component('KalixNav', Navigator)
    Vue.component('Welcome', Welcome)
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
  Cache, EventBus, Message, Util, Header, Home, Login, Navigator, Welcome
}
