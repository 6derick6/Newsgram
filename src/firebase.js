import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCrzMFpzwmM2KtZ38_-y0QRQNDHFDeH8Z0",
  authDomain: "newsgram-curso.firebaseapp.com",
  projectId: "newsgram-curso",
  storageBucket: "newsgram-curso.appspot.com",
  messagingSenderId: "852835491879",
  appId: "1:852835491879:web:b4e2f8b5e9cdb156346e02",
  measurementId: "G-QVV29TX7DZ"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

  export {db, auth, storage, functions};