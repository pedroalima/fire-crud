"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookContext, BookType } from "@/contexts/BookContext";
import { deleteBooksAction } from "@/services/actions/booksAction";
import { useContext, useEffect } from "react";
import BookDescription from "../BookDescription";

export default function BookList() {
  const { books, getAllBooks } = useContext(BookContext);

  useEffect(() => {
    getAllBooks();
  }, [books]);

  return (
    <section>
      <h2 className="text-4xl">Meus Livros</h2>
      <ul className="p-6 rounded-lg flex gap-4">
        {books && books.map((book: BookType) => (
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
              />
              <Button variant="outline" onClick={() => deleteBooksAction(book.id)}>Deletar</Button>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </section>
  );
}
