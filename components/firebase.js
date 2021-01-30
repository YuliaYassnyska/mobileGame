import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyA9mod_0XPrKoWBpuwaNBbfNtifTmrWaLQ",
    authDomain: "game-bae62.firebaseapp.com",
    projectId: "game-bae62",
    storageBucket: "game-bae62.appspot.com",
    messagingSenderId: "252459154681",
    appId: "1:252459154681:web:1a1c4fa95afe3ec1947628",
    measurementId: "G-4DZ124E2L7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export default {
    firebase,
    auth,
    db
  };