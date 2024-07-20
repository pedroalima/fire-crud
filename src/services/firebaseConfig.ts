import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_APIKEY;
if (!apiKey) {
  throw new Error("A chave de API do Firebase não está definida. Verifique suas variáveis de ambiente.");
}

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "fire-crud-ba674.firebaseapp.com",
  projectId: "fire-crud-ba674",
  storageBucket: "fire-crud-ba674.appspot.com",
  messagingSenderId: "862513445158",
  appId: "1:862513445158:web:3fcd5127a51bec6b60a9e7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };

