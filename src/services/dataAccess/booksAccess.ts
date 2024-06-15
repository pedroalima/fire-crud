import { addDoc, collection, DocumentData, getDocs, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function getBooksAccess() {
  const q = query(collection(db, "livros"));
  const response = await getDocs(q);
  return response;
}

export async function addBooksAccess(body: DocumentData) {
  const response = await addDoc(collection(db, "livros"), body);
  return response;
}