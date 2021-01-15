// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCKOVwl7DzEFD1FSpGQb3YtaFRt9wjB2xQ",
  authDomain: "challenge-5eedc.firebaseapp.com",
  projectId: "challenge-5eedc",
  storageBucket: "challenge-5eedc.appspot.com",
  messagingSenderId: "188575568196",
  appId: "1:188575568196:web:80d2a0adfa7ecf288ac711",
  measurementId: "G-9H1173DDDR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };