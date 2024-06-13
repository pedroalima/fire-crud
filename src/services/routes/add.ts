import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function Add() {
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