// require vue and vue modules
import Vue from 'vue'
import Router from 'vue-router'

// import route components
import {Home, About, Contact} from './routes/_index'

// set routes
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }          
  ]
})


// register router
Vue.use(Router)