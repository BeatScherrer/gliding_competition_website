import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router.js'

import firebase from '@/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    loading: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload;
    },
    setError (state, payload) {
      state.error = payload;
    },
    setLoading (state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    userSignUp ( {commit}, payload) {
        commit('setLoading', true);
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(function(firebaseUser) {
          commit('setUser', { email: firebaseUser.user.email});
          commit('setLoading', false);
          router.push('/user');
        }).catch(error => {
          commit('setError', error.message);
          commit('setLoading', false);
        })
    },
    userSignIn ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', {email: firebaseUser.user.email});
        commit('setLoading', false);
        commit('setError', null);
        router.push('/user');
      })
      .catch(error => {
        commit('setError', error.message);
        commit('setLoading', false);
      })
    },
    autoSignIn ({commit}, payload) {
     commit('setUser', {email: payload.email})
    },
    userSignOut ({commit}) {
      firebase.auth().signOut();
      commit('setUser', null);
      router.push('/login');
    }
  }
})
