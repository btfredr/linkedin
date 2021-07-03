import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAunhejHKEu1n3R7T1cQ79E7dcKL5Vl30I",
  authDomain: "linkedin-84969.firebaseapp.com",
  projectId: "linkedin-84969",
  storageBucket: "linkedin-84969.appspot.com",
  messagingSenderId: "336388130457",
  appId: "1:336388130457:web:f159aa8e32f3004d645a08",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
