import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

import firebase from 'firebase'

// Configure .env variables
import dotenv from 'dotenv'
dotenv.config()

// Use vuex
Vue.use(VueResource)

Vue.config.productionTip = false

let app = '';

// Configure firebase
const config = {
  apiKey: process.env.VUE_APP_FIREABSE_API_KEY,
  authDomain: "jsm2019-ffe72.firebaseapp.com",
  databaseURL: "https://jsm2019-ffe72.firebaseio.com",
  projectId: "jsm2019-ffe72",
  storageBucket: "",
  messagingSenderId: "1085322579037"
};
firebase.initializeApp(config);

// make sure the auth state is available before the app is created.
firebase.auth().onAuthStateChanged(() => {
  if(!app)
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
});
