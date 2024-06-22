"use client";
import { BookContext } from "@/contexts/BookContext";
import { addBooksAction } from "@/services/actions/booksAction";
import { getBooksObserver } from "@/services/observers/booksObservers";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
    title: string;
    author: string;
  };

export default function AddBookForm() {
  const { book, setBook } = useContext(BookContext);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addBooksAction(data);
    setBook(getBooksObserver());
    console.log(book);
  };

  return (
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
  );
}
