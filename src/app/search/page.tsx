"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookContext } from "@/contexts/BookContext";
import { useContext } from "react";

interface BookType {
  id: string,
  volumeInfo: {
    title: string,
    authors: string[],
    imageLinks: {
    smallThumbnail: string,
    thumbnail: string
    }
  }
}

export default function Search() {
  const { searchResult } = useContext(BookContext);
    
  return (
    <section>
      <ul className="bg-white p-6 rounded-lg flex flex-wrap justify-center gap-4">
        {searchResult && searchResult.map((book: BookType) => (
          <Card key={book.id} className="w-[300px]">
            <CardHeader>
              <CardTitle>{book.volumeInfo.title}</CardTitle>
              {book.volumeInfo.authors && book.volumeInfo.authors.map((item, i) => (
                <CardDescription key={i}>{item}</CardDescription>
              ))}
            </CardHeader>
            <CardContent>
              {/* <Image src={book.volumeInfo.imageLinks.thumbnail} width={300} height={300} className="w-full h-full" alt={book.volumeInfo.title} /> */}
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
