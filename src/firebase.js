// File holding firebase configuration

import firebase from 'firebase'

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

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

firebase.bla = 'test';

export default firebase;
