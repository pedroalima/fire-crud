"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BookContext, BookType } from "@/contexts/BookContext";
import { getGoogleBooks } from "@/services/dataAccess/googleBooksAccess";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  title: z.string()
});

export default function SearchBook() {
  const { addBook } = useContext(BookContext);
  const [ searchResult, setSearchResult ] = useState<BookType[] | []>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    }
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    setSearchResult(await getGoogleBooks(value.title));
  }

  function handleAddBook(book: BookType) {
    addBook(book);
  }

  return (
    <section className="flex flex-col justify-center items-center bg-slate-50 py-20">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Pesquisar livros" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
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
