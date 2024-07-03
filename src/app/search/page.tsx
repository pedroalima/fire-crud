"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookContext, BookType } from "@/contexts/BookContext";
import Image from "next/image";
import { useContext } from "react";

export default function Search() {
  const { searchResult } = useContext(BookContext);
    
  return (
    <section>
      <ul className="bg-white py-20 px-10 rounded-lg flex flex-wrap justify-center gap-4">
        {searchResult && searchResult.map((book: BookType) => (
          <Card key={book.id} className="w-[300px]">
            <CardHeader>
              <CardTitle>{book.volumeInfo.title}</CardTitle>
              {book.volumeInfo.authors && book.volumeInfo.authors.map((item, i) => (
                <CardDescription key={i}>{item}</CardDescription>
              ))}
            </CardHeader>
            <CardContent>
              <Image src={book.volumeInfo.imageLinks.smallThumbnail && book.volumeInfo.imageLinks.smallThumbnail} width={300} height={300} className="w-full h-full" alt={book.volumeInfo.title} />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Adicionar</Button>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </section>
  );
}
