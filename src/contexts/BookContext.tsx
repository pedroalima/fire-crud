"use client";
import { addBooksAction, getBooksAction } from "@/services/actions/booksAction";
import { getBooksObserver } from "@/services/observers/booksObservers";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export interface BookType {
  id: string,
  volumeInfo: {
    title: string,
    authors: string[],
    description: string,
    imageLinks: {
    smallThumbnail: string,
    thumbnail: string
    }
  }
}

interface BookContextType {
  books: BookType[] | [],
  setBooks: Dispatch<SetStateAction<BookType[] | []>>,
  getAllBooks: () => Promise<void>,
  addBook: (data: BookType) => void
  searchResult: BookType[] | [],
  setSearchResult: Dispatch<SetStateAction<BookType[] | []>>,
  isLoading: null | boolean,
  setIsLoading: Dispatch<SetStateAction<null | boolean>>
}

export const BookContext = createContext({} as BookContextType);

export function BookProvider({ children } : { children: ReactNode }) {
  const [ books, setBooks ] = useState<BookType[] | []>([]);
  const [ searchResult, setSearchResult ] = useState<BookType[] | []>([]);
  const [ isLoading, setIsLoading ] = useState<null | boolean>(null);

  async function getAllBooks() {
    setIsLoading(true);
    try {
      const data = await getBooksAction();
      setBooks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function addBook(data: BookType) {
    addBooksAction(data);
    setBooks(getBooksObserver());
  }

  return (
    <BookContext.Provider 
      value={{ 
        books, 
        setBooks, 
        getAllBooks, 
        addBook, 
        searchResult, 
        setSearchResult, 
        isLoading, 
        setIsLoading 
      }}>
      {children}
    </BookContext.Provider>
  );
}
