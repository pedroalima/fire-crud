import { BookType } from "@/contexts/BookContext";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

const booksReference = query(collection(db, "livros"));

export function getBooksObserver() {
  const books: BookType[] = [];
  onSnapshot(booksReference, (query)=> {
    query.forEach((doc) => {
      books.push({
        ...doc.data() as BookType, 
        id: doc.id
      });
    });
  });
  return books;
}