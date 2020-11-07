import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVMsSvMYPynTGp-Z6NsKxO0jCtc-D515A",
    authDomain: "fb-clone-9e522.firebaseapp.com",
    databaseURL: "https://fb-clone-9e522.firebaseio.com",
    projectId: "fb-clone-9e522",
    storageBucket: "fb-clone-9e522.appspot.com",
    messagingSenderId: "33731235721",
    appId: "1:33731235721:web:a5533ae43b217b924a9b58",
    measurementId: "G-GWRT367743"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};