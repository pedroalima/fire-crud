import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function getBooksAccess() {
  const q = query(collection(db, "livros"));
  const querySnapshot = await getDocs(q);

  return querySnapshot;
}

export async function addBooksAccess() {
  try {
    const docRef = await addDoc(collection(db, "livros"), {
      author: "Ada",
      title: "Lovelace"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}