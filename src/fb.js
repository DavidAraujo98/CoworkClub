import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDDXQ2Utd4sq--UIvvh8rVxAFzOkVSumgo",
    authDomain: "coworkclub.firebaseapp.com",
    projectId: "coworkclub",
    storageBucket: "coworkclub.appspot.com",
    messagingSenderId: "538880555482",
    appId: "1:538880555482:web:586002f91bdcec0fe428e3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const st = getStorage(app);
const auth = getAuth(app);

export { db, st, auth };
