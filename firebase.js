import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP_2Mz4vkFZSOmqcjkj8NhTtN-wxbdcPU",
  authDomain: "whatsapp-clone-20d9d.firebaseapp.com",
  projectId: "whatsapp-clone-20d9d",
  storageBucket: "whatsapp-clone-20d9d.appspot.com",
  messagingSenderId: "396569299527",
  appId: "1:396569299527:web:aa31205def0110e2a87f62",
  measurementId: "G-FZQ7LVF131"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
