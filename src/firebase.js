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

const db = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings);

export default firebase;
