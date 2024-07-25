"use client";

import SearchInput from "@/components/common/SearchInput";
import AddBooks from "@/components/layout/AddBooks";
import BookList from "@/components/layout/BookList";

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-8 md:px-6 md:pt-40">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Meus Favoritos</h1>
        <SearchInput />
      </div>
      <div className="flex flex-col mb-6">
        <BookList />
      </div>
      <AddBooks />
    </main>
  );
}