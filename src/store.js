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
          commit('setError', "Passwörter stimmen nicht überein!");
          return;
        }
        // create user
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(function(firebaseUser) {

          const empty_user = {
            prename: '',
            surname: '',
            street: '',
            city: '',
            zip: '',
            birth: '',
            mobile: '',
            email: firebaseUser.user.email,

            glider: '',
            immat: '',
            sign: '',
            group: '',
            logger_id: '',
            flarm_id: '',
            training1: false,
            training2: false,
            training3: false,
            camping: false,
            pickup_service: false,
            glider_assembled: false,
            verified: false
          }

          firebase.firestore().collection('users').doc(firebaseUser.user.uid).set(empty_user).then(function() {
            commit('setUser', { email: firebaseUser.user.email});
            commit('setError', null);
            commit('setLoading', false);
            alert("User created!");
            router.push('/user');
          });
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

    userSignInWithGoogle({commit}) {
      commit('setLoading', true);
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('email');
      provider.setCustomParameters({
        prompt: 'select_account'
      });

      firebase.auth().signInWithPopup(provider).then(function(result) {
          const user = result.user;

          // Check if doc exists
          firebase.firestore().collection('users').doc(user.uid).get().then(docSnapshot => {
            if(!docSnapshot.exists){

              console.log(result.user.email);

              const empty_user = {
                prename: '',
                surname: '',
                street: '',
                city: '',
                zip: '',
                birth: '',
                mobile: '',
                email: result.user.email,

                glider: '',
                immat: '',
                sign: '',
                group: '',
                logger_id: '',
                flarm_id: '',
                training1: false,
                training2: false,
                training3: false,
                camping: false,
                pickup_service: false,
                glider_assembled: false,
                verified: false
              }

              firebase.firestore().collection('users').doc(user.uid).set(empty_user);
            }
          });

          commit('setUser', {email: user.email});
          commit('setLoading', false);
          commit('setError', null);
          router.push('/user');
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

      // delete doc before deleting authentication
      let docRef = firebase.firestore().collection("users").doc(user.uid);
      docRef.delete().then(function() {
        user.delete().then(function() {
          commit('setUser', null);
        })
        router.push('/register');
        alert("Dein Account wurde gelöscht!");
      }).catch(function (error) {
        commit('setError', error.message);
      });
    }
  }
})
