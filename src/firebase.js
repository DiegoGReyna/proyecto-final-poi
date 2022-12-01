import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDnjubb8OsU6dbvHTzkOumXYcUn8zhE9hM",
    authDomain: "proyecto-poi-9ae03.firebaseapp.com",
    projectId: "proyecto-poi-9ae03",
    storageBucket: "proyecto-poi-9ae03.appspot.com",
    messagingSenderId: "993704303666",
    appId: "1:993704303666:web:23b0200fce37ca6255b02b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();