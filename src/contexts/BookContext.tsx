"use client";
import { addBooksAction, BooksGetType, getBooksAction } from "@/services/actions/booksAction";
import { getBooksObserver } from "@/services/observers/booksObservers";
import axios from "axios";
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

interface FormValues {
  title: string,
  author: string
}

interface BookContextType {
  books: BooksGetType[] | [],
  setBooks: Dispatch<SetStateAction<BooksGetType[] | []>>,
  getAllBooks: () => Promise<void>,
  addBook: (data: FormValues) => void
  searchResult: BookType[] | [],
  setSearchResult: Dispatch<SetStateAction<BookType[] | []>>
  getSearchResult: (title: string) => void
}

export const BookContext = createContext({} as BookContextType);

export function BookProvider({ children } : { children: ReactNode }) {
  const [ books, setBooks ] = useState<BooksGetType[] | []>([]);
  const [ searchResult, setSearchResult] = useState<BookType[] | []>([]);

  async function getAllBooks() {
    const data = await getBooksAction();
    setBooks(data);
  }

  function addBook(data: FormValues) {
    addBooksAction(data);
    setBooks(getBooksObserver());
  }

  async function getGoogleBooks(title: string) {
    try {
      const res = await axios.get("https://www.googleapis.com/books/v1/volumes", {
        params:{
          q: title,
          key: process.env.GOOGLE_BOOKS_APIKEY
        }
      });
      
      console.log(res.data.items);
      return res.data.items;
    } catch (error) {
      console.log(error);
    } 
  }

  async function getSearchResult(title: string) {
    const result = await getGoogleBooks(title);
    setSearchResult(result);
  }

  return (
    <BookContext.Provider value={{ books, setBooks, getAllBooks, addBook, searchResult, setSearchResult, getSearchResult }}>
      {children}
    </BookContext.Provider>
  );
}
