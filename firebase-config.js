// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_0wFUxxNk3Dc8s3jYuUq85kEwYqoFLGw",
  authDomain: "school-project-7beb3.firebaseapp.com",
  databaseURL: "https://school-project-7beb3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "school-project-7beb3",
  storageBucket: "school-project-7beb3.firebasestorage.app",
  messagingSenderId: "846563976783",
  appId: "1:846563976783:web:7dfdb561fa79b17cefec3a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
