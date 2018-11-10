import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import { testStore } from './account.module.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    // vuex modules
    testStore: testStore
  }
});
