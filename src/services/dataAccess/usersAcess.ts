import { addDoc, collection, DocumentData } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function addUserAccess(body: DocumentData) {
  const response = await addDoc(collection(db, "users"), body);
  return response;
}