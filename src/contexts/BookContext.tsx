"use client";
import { BooksGetType } from "@/services/actions/booksAction";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface BookContextType {
  books: BooksGetType[] | [],
  setBooks: Dispatch<SetStateAction<BooksGetType[] | []>>
}

export const BookContext = createContext({} as BookContextType);

export function BookProvider({ children } : { children: ReactNode }) {
  const [ books, setBooks ] = useState<BooksGetType[] | []>([]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}
