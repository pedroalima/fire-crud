import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

const booksReference = query(collection(db, "livros"));

export function getBooksObserver() {
  onSnapshot(booksReference, (query)=> {
    const books: any[]= [];
    query.forEach((doc) => {
      books.push(doc.data());
    });
    console.log(books);
  });
}