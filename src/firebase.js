import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYMtmjTndrdMLdiQYVdotEv1sweFV9fDo",
  authDomain: "chat-dd01c.firebaseapp.com",
  projectId: "chat-dd01c",
  storageBucket: "chat-dd01c.appspot.com",
  messagingSenderId: "376213343519",
  appId: "1:376213343519:web:910a58472bd61b6207f42a",
  measurementId: "G-Z1HRF0NYDE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
