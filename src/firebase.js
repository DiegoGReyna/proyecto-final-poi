import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBlMgYxtsHEa5pftw5ZVlovPto3DD9V6EA",
    authDomain: "poi-project-93467.firebaseapp.com",
    projectId: "poi-project-93467",
    storageBucket: "poi-project-93467.appspot.com",
    messagingSenderId: "181054588724",
    appId: "1:181054588724:web:76db0002c23b78ae864761"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();