"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookContext, BookType } from "@/contexts/BookContext";
import { deleteBooksAction } from "@/services/actions/booksAction";
import { useContext, useEffect } from "react";

export default function BookList() {
  const { books, getAllBooks } = useContext(BookContext);

  useEffect(() => {
    getAllBooks();
  }, [books]);

  return (
    <section>
      <h2>Meus Livros</h2>
      <ul className="bg-slate-800 p-6 rounded-lg flex gap-4">
        {books && books.map((book: BookType) => (
          <Card key={book.id} className="w-[300px]">
            <CardHeader>
              <CardTitle>{book.volumeInfo.title}</CardTitle>
              <CardDescription>{book.volumeInfo.authors}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={book.volumeInfo.imageLinks.thumbnail} className="w-[150px] h-auto" alt={book.volumeInfo.title} />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => deleteBooksAction(book.id)}>Deletar</Button>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </section>
  );
}
