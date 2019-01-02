import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

// Configure .env variables
import dotenv from 'dotenv'
dotenv.config();


Vue.config.productionTip = false;

// Use http request module to fetch facebook posts
Vue.use(VueResource);

import firebase from '@/firebase.js'

let app = new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if(firebaseUser) {
        this.$store.dispatch('autoSignIn', firebaseUser);
      }
    })
  }
}).$mount('#app');
