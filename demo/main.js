import Vue from 'vue'
import App from './App.vue'

import VueSidebarMenu from '../src/index'
import yubibutton from '../src/pages/button'
import yubiform from '../src/pages/form'
Vue.use(VueSidebarMenu)

Vue.use(VueRouter)

const Tables = { template: '<div>Tables Page</div>' }
const Auth = { template: '<div>Auth Page <router-view/></div>' }
const Login = { template: '<div>Login Page</div>' }
const Registration = { template: '<div>Registration Page</div>' }

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'button',
      component: yubibutton,
    },
    {
      path: '/form',
      name: 'form',
      component: yubiform,
    },
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
