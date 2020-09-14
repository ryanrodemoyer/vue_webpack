import Vue from 'vue'
// import axios from 'axios'
// import router from './router/index'
// import store from './store'
// import { sync } from 'vuex-router-sync'
import Page from '../Components/Page.vue'
// import { FontAwesomeIcon } from './icons'

// // Registration of global components
// Vue.component('icon', FontAwesomeIcon)

// Vue.prototype.$http = axios

// sync(store, router)

const page = new Vue({
//   store,
//   router,
  ...Page
})

export {
  page,
//   router,
//   store
}
