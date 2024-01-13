// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCziWiNKIudeqgDFrV98jW1BsdZjdhaomc",
  authDomain: "clone-2d658.firebaseapp.com",
  projectId: "clone-2d658",
  storageBucket: "clone-2d658.appspot.com",
  messagingSenderId: "909707065134",
  appId: "1:909707065134:web:c9f19ca08e6ccced5c2cbf",
  measurementId: "G-L009E6QWZM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
