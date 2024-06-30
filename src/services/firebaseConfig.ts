import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "fire-crud-ba674.firebaseapp.com",
  projectId: "fire-crud-ba674",
  storageBucket: "fire-crud-ba674.appspot.com",
  messagingSenderId: "862513445158",
  appId: "1:862513445158:web:3fcd5127a51bec6b60a9e7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);