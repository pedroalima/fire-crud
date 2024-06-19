import { collection, DocumentData, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

const booksReference = query(collection(db, "livros"));

export function getBooksObserver() {
  const books: DocumentData = [];
  onSnapshot(booksReference, (query)=> {
    query.forEach((doc) => {
      books.push(doc.data());
    });
  });
  return books;
}