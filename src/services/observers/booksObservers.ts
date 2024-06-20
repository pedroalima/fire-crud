import { collection, onSnapshot, query } from "firebase/firestore";
import { BooksGetType } from "../actions/booksAction";
import { db } from "../firebaseConfig";

const booksReference = query(collection(db, "livros"));

export function getBooksObserver() {
  const books: BooksGetType[] = [];
  onSnapshot(booksReference, (query)=> {
    query.forEach((doc) => {
      books.push({
        ...doc.data() as BooksGetType, 
        id: doc.id
      });
    });
  });
  return books;
}