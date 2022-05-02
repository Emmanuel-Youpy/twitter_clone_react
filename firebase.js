import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJU9f8mDOukc5Cpoj8tWHvVnOuVBVXhfo",
  authDomain: "twitter-clone-6f06b.firebaseapp.com",
  databaseURL: "https://twitter-clone-6f06b.firebaseio.com",
  projectId: "twitter-clone-6f06b",
  storageBucket: "twitter-clone-6f06b.appspot.com",
  messagingSenderId: "590257338690",
  appId: "1:590257338690:web:e282e7471b81ac7bd770db",
  measurementId: "G-VBV6H6LWF9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
