"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { BookContext, BookType } from "@/contexts/BookContext";
import { useContext } from "react";
import BookCard from "../BookCard";
import SkeletonBookCard from "../SkeletonBookCard";

export default function BookResult() {
  const { addBook, searchResult, isLoading, getAllBooks } = useContext(BookContext);
  const { toast } = useToast();

  function handleAddBook(book: BookType) {
    addBook(book);
    getAllBooks();
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
              <Button onClick={() => {
                handleAddBook(book),
                toast({
                  title: "Adicionado com Sucesso",
                  description: `O livro ${book.volumeInfo.title} foi adicionado a sua lista de favoritos.`,
                });
              }}>Adicionar</Button>
            </BookCard>
          ))
        )}
      </ul>
    </section>
  );
}
