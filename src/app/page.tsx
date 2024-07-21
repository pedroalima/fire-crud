"use client";
import AddBooks from "@/components/layout/AddBooks";
import Banner from "@/components/layout/Banner";
import BookList from "@/components/layout/BookList";
// import { auth } from "@/services/firebaseConfig";
// import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  return (
    <main className="flex flex-col items-centers relative">
      <Banner />
      <BookList />
      <AddBooks />
    </main>
  );
}