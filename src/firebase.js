// File holding firebase configuration

import firebase from 'firebase'

// Configure firebase
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREABSE_API_KEY,
  authDomain: "rm-dittingen.firebaseapp.com",
  projectId: "rm-dittingen",
  storageBucket: "rm-dittingen.appspot.com",
  messagingSenderId: "366638679031",
  appId: "1:366638679031:web:fe13303c5bd5ba13aea4f2",
  measurementId: "G-22Y1YXJ0CG"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings);

export default firebase;
