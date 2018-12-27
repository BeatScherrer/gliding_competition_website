import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

import firebase from '@/firebase.js'

// Configure .env variables
import dotenv from 'dotenv'
dotenv.config()
//
// Use http request module
Vue.use(VueResource)

Vue.config.productionTip = false

// create empty app variable
let app;

// make sure the auth state is available before the app is created.
firebase.auth().onAuthStateChanged(() => {
  if(!app)
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
});
