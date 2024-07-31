"use client";
import SearchInput from "@/components/common/SearchInput";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa6";
import BookResult from "../BookResult";

export default function AddBooks() {
  return (
    <Dialog>
      <DialogTrigger className="rounded-full bg-blue-500 hover:bg-blue-600 w-10 h-10 flex justify-center items-center">
        <FaPlus className="text-white text-2xl" />
      </DialogTrigger>
      <DialogContent className="bg-slate-50">
        <DialogHeader className="flex flex-col items-center gap-3">
          <DialogTitle className="text-center">Pesquise aqui qualquer livro que desejar</DialogTitle>
          <DialogDescription className="px-10 text-center">Você tem acesso a um dos maiores banco de dados do mundo, com o GoogleBooks</DialogDescription>
          <SearchInput />
        </DialogHeader>
        <BookResult />
      </DialogContent>
    </Dialog>
  );
}
