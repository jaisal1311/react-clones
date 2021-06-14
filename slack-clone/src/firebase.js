import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVqmbd04NwU8Vx5SNwhXF-unTrw9tHeqM",
  authDomain: "slack-clone-6a3f8.firebaseapp.com",
  projectId: "slack-clone-6a3f8",
  storageBucket: "slack-clone-6a3f8.appspot.com",
  messagingSenderId: "730549937921",
  appId: "1:730549937921:web:4f8fbead04bf5a2fc4dd00",
  measurementId: "G-26R623PR8Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
