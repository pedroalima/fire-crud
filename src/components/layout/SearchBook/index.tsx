"use client";
import { BookType } from "@/app/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  title: z.string()
});

export default function SearchBook({ onSubmit, searchResult } : { onSubmit: (value: z.infer<typeof formSchema>) => void, searchResult: BookType[] | []}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    }
  });

  useEffect(() => {

  }, [searchResult]);

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
              <CardTitle>{book.volumeInfo.title}</CardTitle>
              {book.volumeInfo.authors && book.volumeInfo.authors.map((item, i) => (
                <CardDescription key={i}>{item}</CardDescription>
              ))}
            </CardHeader>
            <CardContent>
              {/* <Image src={book.volumeInfo.imageLinks.smallThumbnail && book.volumeInfo.imageLinks.smallThumbnail} width={300} height={300} className="w-full h-full" alt={book.volumeInfo.title} /> */}
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
