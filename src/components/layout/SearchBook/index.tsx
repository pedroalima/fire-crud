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
    <section className="flex flex-col justify-center items-center bg-slate-50 py-20">
      <ul className="bg-white py-20 px-10 rounded-lg flex flex-wrap justify-center gap-4">
        {searchResult && searchResult.map((book: BookType) => (
          <Card key={book.id} className="w-[300px]">
            <CardHeader>
              <CardTitle className="text-lg">{book.volumeInfo.title}</CardTitle>
              {book.volumeInfo.authors && book.volumeInfo.authors.map((item, i) => (
                <CardDescription key={i}>
                  <span>{item}</span>
                </CardDescription>
              ))}
            </CardHeader>
            <CardContent className="flex justify-center w-[300px] h-[250px]">
              <div className="p-2 w-[150px]">
                <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleAddBook(book)} className="w-full">Adicionar</Button>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </section>
  );
}
