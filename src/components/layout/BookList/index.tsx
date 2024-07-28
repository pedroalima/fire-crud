"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { BookContext, BookType } from "@/contexts/BookContext";
import { deleteBooksAction } from "@/services/actions/booksAction";
import { useContext, useEffect } from "react";
import BookCard from "../BookCard";
import SkeletonBookCard from "../SkeletonBookCard";

export default function BookList() {
  const { books, getAllBooks, isLoading} = useContext(BookContext);
  const { toast } = useToast();

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
          Array.from({ length: 4 }).map((_, i) =>
            <SkeletonBookCard key={i} />
          )
        ) : (
          books.map((book: BookType) => (
            <BookCard book={book} key={book.id}>
              <Button
                variant="outline"
                onClick={() => {
                  handleDelete(book.id),
                  toast({
                    title: "Deletado com Sucesso!",
                    description: `O livro ${book.volumeInfo.title} foi retirado da sua lista de favoritos.`,
                  });
                }}
              >Deletar</Button>
            </BookCard>
          )))}
      </ul>
    </div>
  );
}
