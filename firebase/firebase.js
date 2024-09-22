// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB3jZ1obvW_8DTS_6UTI5DnE9DjB91FJTk",
    authDomain: "react-19f5c.firebaseapp.com",
    projectId: "react-19f5c",
    storageBucket: "react-19f5c.appspot.com",
    messagingSenderId: "99917211620",
    appId: "1:99917211620:web:e7106c211b0dfc6fe7c9f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {
    app,
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db
};