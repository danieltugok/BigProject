// Polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { ColorThemePlugin } from '../services/vuestic-ui'
import store from '../store/index'
import router from '../router/index'

//Importando Serviço de API e armazenamento
import ApiService from '../services/api.service'
import { TokenService } from '../services/storage.service'

import { VuesticPlugin } from '../services/vuestic-ui/components'
import '../i18n/index'
import YmapPlugin from 'vue-yandex-maps'
import VueClipboard from 'vue-clipboard2'

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}
//import axios from 'axios'
//Vue.prototype.$http = axios

import Toasted from 'vue-toasted';
Vue.use(Toasted)

import '../metrics'
import '../registerServiceWorker'

if (process.env.VUE_APP_BUILD_VERSION) {
  // eslint-disable-next-line
  const message = `%c${'Build_information:'}\n %c${'Version'}: %c${VERSION},\n %c${'Timestamp'}: %c${TIMESTAMP},\n %c${'Commit'}: %c${COMMIT}`
  // eslint-disable-next-line
  console.info(
    message,
    'color: blue;', 'color: red;', 'color: blue;', 'color: red;', 'color: blue;', 'color: red;', 'color: blue;',
  )
}





Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.use(VueClipboard)

Vue.use(ColorThemePlugin, {
  // override colors here.
})

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
