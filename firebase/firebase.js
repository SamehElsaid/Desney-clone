import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {  getAuth,signInWithPopup, signOut } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCTVqZBq7gzdx0tjjllec8pfkZk1U2gKQ4",
    authDomain: "disney-abfeb.firebaseapp.com",
    projectId: "disney-abfeb",
    storageBucket: "disney-abfeb.appspot.com",
    messagingSenderId: "149593322461",
    appId: "1:149593322461:web:7166e87fb231ed0e7a3c34",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export function signInWithGoogle( password) {
    return signInWithPopup(auth, password)
}
export function singout() {
    return signOut(auth)
}
