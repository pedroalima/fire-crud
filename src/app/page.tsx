"use client";
import AddBooks from "@/components/layout/AddBooks";
import Banner from "@/components/layout/Banner";
import BookList from "@/components/layout/BookList";

export default function Home() {
  return (
    <main className="flex flex-col items-centers relative">
      <Banner />
      <BookList />
      <AddBooks />
    </main>
  );
}