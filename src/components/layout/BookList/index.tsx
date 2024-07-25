"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BookContext, BookType } from "@/contexts/BookContext";
import { deleteBooksAction } from "@/services/actions/booksAction";
import { useContext, useEffect } from "react";
import BookCard from "../BookCard";

export default function BookList() {
  const { books, getAllBooks, isLoading} = useContext(BookContext);

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleDelete = async (book: string) => {
    await deleteBooksAction(book);
    getAllBooks();
  };
  
  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? (
          Array.from({ length: 3}).map((_, i) =>
            <div key={i} className="flex flex-col items-center space-y-6 w-[23%] border border-slate-200 rounded-xl py-8 px-4">
              <Skeleton className="w-[170px] h-[170px] self-center bg-slate-200" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-[180px] bg-slate-200" />
                <Skeleton className="h-4 w-[160px] bg-slate-200" />
              </div>
              <Skeleton className="h-10 w-[180px] bg-slate-200" />
            </div>
          )
        ) : (
          books && books.map((book: BookType) => (
            <BookCard book={book} key={book.id}>
              <Button variant="outline" onClick={() => handleDelete(book.id)}>Deletar</Button>
            </BookCard>
          )
          ))}
      </ul>
    </div>
  );
}
