"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookContext } from "@/contexts/BookContext";
import { BooksGetType, deleteBooksAction } from "@/services/actions/booksAction";
import { useContext, useEffect } from "react";

export default function BookList() {
  const { books, getAllBooks } = useContext(BookContext);

  useEffect(() => {
    getAllBooks();
  }, [books]);

  return (
    <ul className="bg-slate-800 p-6 rounded-lg flex gap-4">
      {books && books.map((book: BooksGetType) => (
        <Card key={book.id} className="w-[300px]">
          <CardHeader>
            <CardTitle>{book.title}</CardTitle>
            <CardDescription>{book.author}</CardDescription>
          </CardHeader>
          <CardContent>
            <h3>image</h3>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => deleteBooksAction(book.id)}>Deletar</Button>
          </CardFooter>
        </Card>
      ))}
    </ul>
  );
}
