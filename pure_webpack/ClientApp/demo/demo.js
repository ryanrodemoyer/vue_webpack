import Vue from 'vue'
// import axios from 'axios'
// import router from './router/index'
// import store from './store'
// import { sync } from 'vuex-router-sync'
import Demo from '../Components/Demo.vue'
// import { FontAwesomeIcon } from './icons'

// // Registration of global components
// Vue.component('icon', FontAwesomeIcon)

// Vue.prototype.$http = axios

// sync(store, router)

const demo = new Vue({
//   store,
//   router,
  ...Demo
})

export {
  demo,
//   router,
//   store
}
