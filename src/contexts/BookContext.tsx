"use client";
import { BooksGetType, getBooksAction } from "@/services/actions/booksAction";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface BookContextType {
    book: BooksGetType[] | [],
    setBook: Dispatch<SetStateAction<BooksGetType[] | []>>,
    getAllBook: () => Promise<void>
}

export const BookContext = createContext({} as BookContextType);

export function BookProvider({ children } : { children: ReactNode }) {
  const [ book, setBook ] = useState<BooksGetType[] | []>([]);

  async function getAllBook() {
    const data = await getBooksAction();
    setBook(data);
  }

  return (
    <BookContext.Provider value={{ book, setBook, getAllBook }}>
      {children}
    </BookContext.Provider>
  );
}
