"use client";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BookContext } from "@/contexts/BookContext";
import { getGoogleBooks } from "@/services/dataAccess/googleBooksAccess";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  title: z.string()
});

export default function SearchInput() {
  const { setSearchResult, setIsLoading } = useContext(BookContext);
    
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    }
  });
    
  async function onSubmit(value: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const res = await getGoogleBooks(value.title);
      setSearchResult(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="md:w-2/5">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Qual livro temos para hoje?" className="pl-6 w-full" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
