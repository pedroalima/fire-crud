"use client";
import { Button } from "@/components/ui/button";
import { BookContext, BookType } from "@/contexts/BookContext";
import { useContext } from "react";
import BookCard from "../BookCard";
import SkeletonBookCard from "../SkeletonBookCard";

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
            <SkeletonBookCard key={i} />
          )
        ) : ( 
          searchResult?.map((book: BookType) => (
            <BookCard book={book} key={book.id}>
              <Button onClick={() => handleAddBook(book)}>Adicionar</Button>
            </BookCard>
          ))
        )}
      </ul>
    </section>
  );
}
