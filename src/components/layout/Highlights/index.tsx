"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z.object({
  title: z.string()
});

export default function Highlights() {
  const [ books, setBooks] = useState<BookType[] | []>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    }
  });

  async function getGoogleBooks(title: string) {
    try {
      const res = await axios.get("https://www.googleapis.com/books/v1/volumes", {
        params:{
          q: title,
          key: process.env.GOOGLE_BOOKS_APIKEY
        }
      });

      console.log(res.data.items);
      setBooks(res.data.items);
    } catch (error) {
      console.log(error);
    } 
  }

  function onSubmit(value: z.infer<typeof formSchema>) {
    getGoogleBooks(value.title);
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
                  <Input placeholder="Título" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <ul className="bg-white p-6 rounded-lg flex flex-wrap justify-center gap-4">
        {books && books.map((book: BookType) => (
          <Card key={book.id} className="w-[300px]">
            <CardHeader>
              <CardTitle>{book.volumeInfo.title}</CardTitle>
              {book.volumeInfo.authors && book.volumeInfo.authors.map((item, i) => (
                <CardDescription key={i}>{item}</CardDescription>
              ))}
            </CardHeader>
            <CardContent>
              <Image src={book.volumeInfo.imageLinks.thumbnail} width={300} height={300} className="w-full h-full" alt={book.volumeInfo.title} />
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
