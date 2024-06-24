"use client";
import Button from "@/components/common/Button";
import { BookContext } from "@/contexts/BookContext";
import { BooksGetType, deleteBooksAction } from "@/services/actions/booksAction";
import { useContext, useEffect } from "react";

export default function BookList() {
  const { books, getAllBooks } = useContext(BookContext);

  useEffect(() => {
    getAllBooks();
  }, [books]);

  return (
    <ul className="bg-slate-800 p-6 rounded-lg flex gap-4">
      {books && books.map((book: BooksGetType) => (
        <li key={book.id} className="bg-slate-600 p-4 my-2 rounded-lg">
          <h3>Título: {book.title}</h3>
          <span>Author: {book.author}</span>
          <div className="flex justify-between">
            <Button
              text="Deletar"
              className="bg-red-500" 
              onClick={() => deleteBooksAction(book.id)}
            />
            <Button
              text="Editar"
              className="bg-white text-black"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
