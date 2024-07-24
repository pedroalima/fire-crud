"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BookContext, BookType } from "@/contexts/BookContext";
import Link from "next/link";
import { useContext } from "react";

export default function BookResult() {
  const { addBook, searchResult, isLoading } = useContext(BookContext);

  function handleAddBook(book: BookType) {
    addBook(book);
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? (
          Array.from({ length: 10}).map((_, i) =>
            <div key={i} className="flex flex-col items-center space-y-6 w-[25%] h-[415px] border border-slate-200 rounded-xl py-8 px-4">
              <Skeleton className="w-[170px] h-[170px] self-center rounded-xl bg-slate-200" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-[180px] bg-slate-200" />
                <Skeleton className="h-4 w-[160px] bg-slate-200" />
              </div>
              <Skeleton className="h-10 w-[180px] bg-slate-200" />
            </div>
          )
        ) : ( 
          searchResult && searchResult.map((book: BookType) => (
            <div key={book.id} className="bg-background flex flex-col justify-between border rounded-lg overflow-hidden group">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View book details</span>
              </Link>
              <img
                src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                width={300}
                height={400}
                className="w-full h-[250px] object-scale-down"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold line-clamp-2">{book.volumeInfo.title}</h3>
                {book.volumeInfo.authors && book.volumeInfo.authors.map((item, i) => (
                  <p key={i} className="text-sm text-muted-foreground line-clamp-1">{item}</p>
                ))}
                <Button onClick={() => handleAddBook(book)} className="w-full">Adicionar</Button>
              </div>
            </div>
          ))
        )}
      </ul>
    </section>
  );
}
