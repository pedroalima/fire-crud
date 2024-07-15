"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookContext, BookType } from "@/contexts/BookContext";
import { deleteBooksAction } from "@/services/actions/booksAction";
import { useContext, useEffect } from "react";
import BookDescription from "../BookDescription";

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
    <section>
      <h2 className="text-4xl">Meus Livros</h2>
      <ul className="p-6 rounded-lg flex gap-4">
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
            <Card key={book.id} className="w-[23%] flex flex-col justify-between items-center shadow-xl">
              <CardHeader className="p-4">
                <CardTitle>{book.volumeInfo.title}</CardTitle>
                <CardDescription>{book.volumeInfo.authors}</CardDescription>
              </CardHeader>
              <CardContent className="w-[50%] p-4">
                <img src={book.volumeInfo.imageLinks.thumbnail} className="w-full h-full" alt={book.volumeInfo.title} />
              </CardContent>
              <CardFooter className="flex justify-between w-full p-4">
                <BookDescription 
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  image={book.volumeInfo.imageLinks.smallThumbnail}
                  description={book.volumeInfo.description}
                  pageCount={book.volumeInfo.pageCount}
                />
                <Button variant="outline" onClick={() => handleDelete(book.id)}>Deletar</Button>
              </CardFooter>
            </Card>
          )
          ))}
      </ul>
    </section>
  );
}
