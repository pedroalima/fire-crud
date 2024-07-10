"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookContext, BookType } from "@/contexts/BookContext";
import { useContext } from "react";

export default function SearchBook() {
  const { addBook, searchResult } = useContext(BookContext);

  function handleAddBook(book: BookType) {
    addBook(book);
  }

  return (
    <section className="flex flex-col justify-center items-center bg-slate-50 py-10">
      <ul className="py-10 px-10 rounded-lg flex flex-wrap justify-center gap-4">
        {searchResult && searchResult.map((book: BookType) => (
          <Card key={book.id} className="w-1/5 flex flex-col justify-between items-center shadow-xl hover:drop-shadow-2xl transition-all">
            <CardHeader className="flex justify-center w-[180px] h-auto">
              <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg">{book.volumeInfo.title}</CardTitle>
              {book.volumeInfo.authors && book.volumeInfo.authors.map((item, i) => (
                <CardDescription key={i}>
                  <span>{item}</span>
                </CardDescription>
              ))}
            </CardContent>
            <CardFooter className="w-full">
              <Button onClick={() => handleAddBook(book)} className="w-full">Adicionar</Button>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </section>
  );
}
