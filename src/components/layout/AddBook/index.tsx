"use client";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { BookContext } from "@/contexts/BookContext";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";

export type FormValues = {
  title: string;
  author: string;
};

export default function AddBook() {
  const { addBook } = useContext(BookContext);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addBook(data);
  };

  return (
    <div className="absolute bottom-5 right-5 rounded-full bg-blue-500 hover:bg-blue-600 w-10 h-10 flex justify-center items-center">
      <Drawer>
        <DrawerTrigger>
          <FaPlus className="text-white text-2xl" />
        </DrawerTrigger>
        <DrawerContent>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center p-3 rounded-lg">
            <DrawerHeader className="px-40 flex flex-col gap-5">
              <DrawerTitle className="text-center">Qual é o título e o nome do autor do livro?</DrawerTitle>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <label htmlFor="title" className="font-semibold text-[#020817]">Título</label>
                  <input
                    id="title"
                    className="text-[#020817] p-2 rounded-lg w-full"
                    {...register("title", { required: "O campo está em branco" })}
                  />
                  {errors.title && <p className="text-[10px] font-light text-red-400">{errors.title.message}</p>}
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="author" className="font-semibold text-[#020817]">Autor</label>
                  <input
                    id="author"
                    className="text-[#020817] p-2 rounded-lg w-full"
                    {...register("author", { required: "O campo está em branco" })}
                  />
                  {errors.author && <p className="text-[10px] font-light text-red-400">{errors.author.message}</p>}
                </div>
              </div>
            </DrawerHeader>
            <DrawerFooter>
              <Button className="bg-blue-400 hover:bg-blue-500 self-center">Adicionar Livro</Button>
              <DrawerClose>
                <Button type="button" variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
