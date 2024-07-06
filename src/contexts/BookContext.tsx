"use client";
import { addBooksAction, BooksGetType, getBooksAction } from "@/services/actions/booksAction";
import { getBooksObserver } from "@/services/observers/booksObservers";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export interface BookType {
  id: string,
  volumeInfo: {
    title: string,
    authors: string[],
    imageLinks: {
    smallThumbnail: string,
    thumbnail: string
    }
  }
}

interface BookContextType {
  books: BooksGetType[] | [],
  setBooks: Dispatch<SetStateAction<BooksGetType[] | []>>,
  getAllBooks: () => Promise<void>,
  addBook: (data: BookType) => void
}

export const BookContext = createContext({} as BookContextType);

export function BookProvider({ children } : { children: ReactNode }) {
  const [ books, setBooks ] = useState<BooksGetType[] | []>([]);

  async function getAllBooks() {
    const data = await getBooksAction();
    setBooks(data);
  }

  function addBook(data: BookType) {
    addBooksAction(data);
    setBooks(getBooksObserver());
  }

  return (
    <BookContext.Provider value={{ books, setBooks, getAllBooks, addBook }}>
      {children}
    </BookContext.Provider>
  );
}
