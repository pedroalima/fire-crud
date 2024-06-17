import { DocumentData } from "firebase/firestore";
import { addBooksAccess, getBooksAccess, setBooksAccess } from "../dataAccess/booksAccess";

export async function getBooksAction() {
  const response = await getBooksAccess();
  const books: DocumentData = [];

  response.forEach((doc) => {
    books.push(doc.data());
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