"use client";
import Banner from "@/components/layout/Banner";
import SearchBook, { formSchema } from "@/components/layout/SearchBook";
import { getGoogleBooks } from "@/services/dataAccess/googleBooksAccess";
import { useState } from "react";
import { z } from "zod";

export interface BookType {
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

export default function Home() {
  const [ searchResult, setSearchResult ] = useState<BookType[] | []>([]);

  async function onSubmit(value: z.infer<typeof formSchema>) {
    setSearchResult(await getGoogleBooks(value.title));
  }

  return (
    <main className="flex flex-col items-centers h-screen relative">
      <Banner />
      <SearchBook onSubmit={onSubmit} searchResult={searchResult} />
      <div>
        <h2>Meus Livros</h2>
        {/* <BookList /> */}
      </div>
      {/* <AddBooks /> */}
    </main>
  );
}