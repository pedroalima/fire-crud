"use client";
import AddBooks from "@/components/layout/AddBooks";
import Banner from "@/components/layout/Banner";
import BookList from "@/components/layout/BookList";
import Login from "@/components/layout/Login";

export default function Home() {
  return (
    <main className="flex flex-col items-centers relative">
      <Banner />
      <Login />
      <BookList />
      <AddBooks />
    </main>
  );
}