import { BookType } from "@/contexts/BookContext";
import { DocumentData } from "firebase/firestore";
import { addBooksAccess, deleteBooksAccess, getBooksAccess, setBooksAccess, updateBooksAccess } from "../dataAccess/booksAccess";

export interface BooksAddType {
  book?: DocumentData,
  title: string,
  author: string
}

export async function getBooksAction() {
  const response = await getBooksAccess();
  const books: BookType[] = [];
  
  response.forEach((doc) => {
    books.push({
      ...doc.data() as BookType,
      id: doc.id
    });
  });
  return books;
}

export async function addBooksAction(body: DocumentData) {
  const response = await addBooksAccess(body);
  return response.id;
}

export async function setBooksAction(body: DocumentData, id: string) {
  const response = await setBooksAccess(body, id);
  return response;
}

export async function updateBooksAction(body: DocumentData, id: string) {
  const response = await updateBooksAccess(body, id);
  return response;
}

export async function deleteBooksAction(id: string) {
  const response = await deleteBooksAccess(id);
  return response;
}