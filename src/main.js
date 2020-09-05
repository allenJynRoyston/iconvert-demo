import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.use(require('vue-moment'));

// import global components (optional)
// import {ComponentName} from './components/_index'
// Vue.component('ComponentName', ComponentName)

// render app
new Vue({
  el: '#app',
  router,
  store,
  render: site => site(App)
})
