"use client";

import Button from "@/components/common/Button";
import { addBooksAction, BooksGetType, deleteBooksAction, getBooksAction } from "@/services/actions/booksAction";
import { getBooksObserver } from "@/services/observers/booksObservers";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  title: string;
  author: string;
};

export default function Home() {
  const [ books, setBooks ] = useState<BooksGetType[] | []>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addBooksAction(data);
    setBooks(getBooksObserver());
    console.log(books);
  };  

  useEffect(() => {
    getBooksAction().then((res) => {
      setBooks(res);
    });
  }, [books]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Meus Livros</h2>
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
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-700 flex flex-col items-center p-3 rounded-lg">
        <div className="flex items-center gap-3 p-2">
          <label htmlFor="title">Título</label>
          <input
            id="title"
            className="text-black p-2 rounded-lg"
            {...register("title", { required: "First name is required" })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="flex items-center gap-3 p-2">
          <label htmlFor="author">Autor</label>
          <input
            id="author"
            className="text-black p-2 rounded-lg"
            {...register("author", { required: "Last name is required" })}
          />
          {errors.author && <p>{errors.author.message}</p>}
        </div>
        <button type="submit" className="px-6 py-1 rounded-lg bg-blue-400">Adicionar Livro</button>
      </form>
    </main>
  );
}
