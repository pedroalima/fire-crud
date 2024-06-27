"use client";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BookContext } from "@/contexts/BookContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { z } from "zod";

const formSchema = z.object({
  title: z.string(),
  author: z.string()
});

export default function AddBooks() {
  const { addBook } = useContext(BookContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: ""
    }
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    addBook(data);
  }

  return (
    <div className="absolute bottom-5 right-5 rounded-full bg-blue-500 hover:bg-blue-600 w-10 h-10 flex justify-center items-center">
      <Drawer>
        <DrawerTrigger>
          <FaPlus className="text-white text-2xl" />
        </DrawerTrigger>
        <DrawerContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center p-3 rounded-lg">
              <DrawerHeader className="px-40 flex flex-col gap-5">
                <DrawerTitle className="text-center">Qual é o título e o nome do autor do livro?</DrawerTitle>
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Título" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Autor" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </DrawerHeader>
              <DrawerFooter>
                <Button className="bg-blue-400 hover:bg-blue-500 self-center">Adicionar Livro</Button>
                <DrawerClose>
                  <span className="text-sm p-2 cursor-pointer">Cancel</span>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
