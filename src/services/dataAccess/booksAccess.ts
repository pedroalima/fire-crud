import { addDoc, collection, doc, DocumentData, getDocs, query, setDoc, updateDoc } from "firebase/firestore";
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

export async function setBooksAccess(body: DocumentData, id: string) {
  const response = await setDoc(doc(db, "livros", id), body);
  return response;
}

export async function updateBooksAccess(body: DocumentData, id: string) {
  const book = doc(db, "livros", id);
  const response = await updateDoc(book, body);
  return response;
}