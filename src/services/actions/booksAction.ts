import { DocumentData } from "firebase/firestore";
import { getBooksAccess } from "../dataAccess/booksAccess";

export async function getBooksAction() {
  const res = await getBooksAccess();
  const books: DocumentData = [];

  res.forEach((doc) => {
    books.push(doc.data());
  });
  return books;
}