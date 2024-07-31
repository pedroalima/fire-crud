"use client";

import AddBooks from "@/components/layout/AddBooks";
import BookList from "@/components/layout/BookList";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main className="w-full max-w-6xl mx-auto px-4 py-8 md:p-6 md:my-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Meus Favoritos</h1>
          <AddBooks />
        </div>
        <BookList />
      </main>
      <Footer />
    </>
  );
}