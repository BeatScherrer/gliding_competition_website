import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

// Configure .env variables
import dotenv from 'dotenv'
dotenv.config();


Vue.config.productionTip = false;

// Use http request module
Vue.use(VueResource);

// Use firestore
//Vue.use(VueFirestore);

import firebase from '@/firebase.js'

// create empty app variable
let app="";

// make sure the auth state is available before the app is created.
firebase.auth().onAuthStateChanged(() => {
  if(!app)
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
});
