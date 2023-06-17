import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "chat-7161b.firebaseapp.com",
  projectId: "chat-7161b",
  storageBucket: "chat-7161b.appspot.com",
  messagingSenderId: "635306098096",
  appId: "1:635306098096:web:5e3c09644cbf816ee02a75",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
