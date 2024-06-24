"use client";
import Button from "@/components/common/Button";
import { BooksGetType, deleteBooksAction } from "@/services/actions/booksAction";

export default function BookList({ data } : { data: BooksGetType[] }) {
  return (
    <ul className="bg-slate-800 p-6 rounded-lg flex gap-4">
      {data && data.map((book: BooksGetType) => (
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
