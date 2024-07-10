"use client";
import Banner from "@/components/layout/Banner";
import SearchBook from "@/components/layout/SearchBook";

export default function Home() {
  return (
    <main className="flex flex-col items-centers h-screen relative">
      <Banner />
      <SearchBook />
      {/* <BookList /> */}
      {/* <AddBooks /> */}
    </main>
  );
}