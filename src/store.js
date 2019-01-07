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

        // Check if passwords match.
        if(payload.password !== payload.password_ver)
        {
          const errorMessage = "Passwörter stimmen nicht überein";
          commit('setError', errorMessage);
          console.log("test");
          return;
        }
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(function(firebaseUser) {
          commit('setUser', { email: firebaseUser.user.email});
          commit('setError', null);
          commit('setLoading', false);
          alert("User created!");
          router.push('/user');
        }).catch(error => {
          console.log(error.message);
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

    userSignInWithGoogle({commit}) {
      commit('setLoading', true);
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('email');
      provider.setCustomParameters({
        prompt: 'select_account'
      });

      firebase.auth().signInWithPopup(provider).then(function(result) {
          const user = result.user;
          console.log(user);

          router.push('/user');

          commit('setUser', {email: user.email});
          commit('setLoading', false);
          commit('setError', null);
      }).catch(function(error) {
        const errorMessage = error.message;

        commit('setError', errorMessage);
        commit('setLoading', false);
      });
    },

    userSignInWithFacebook({commit}) {
      commit('setLoading', true);
      var provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('email');
      provider.setCustomParameters({
        'display': 'popup',
        'auth_type': 'reauthenticate'
      });

      firebase.auth().signInWithPopup(provider).then(function(result) {
        if(result.user)
        {
          const user = result.user;

          router.push('/user');

          commit('setUser', {email: user.email});
          commit('setLoading', false);
          commit('setError', null);
        }
        }).catch(function(error) {
          const errorMessage = error.message;

          commit('setError', errorMessage);
          commit('setLoading', true);
        });
    },

    autoSignIn ({commit}, payload) {
     commit('setUser', {email: payload.email})
    },
    userSignOut ({commit}) {
      firebase.auth().signOut().then(function() {
        commit('setUser', null);
        router.push('/login');
      });
    },

    userDelete({commit}) {
      const user = firebase.auth().currentUser;

      user.delete().then(function() {
        firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).delete().then(function() {
          commit('setUser', null);
          this.$router.push('/login');
        })
      }).catch(function(error) {
        commit('setError', error.message);
      });
    }
  }
})
