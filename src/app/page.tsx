"use client";
import { getBooksAction } from "@/services/actions/booksAction";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getBooksAction().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Hello World</h2>
      </div>
    </main>
  );
}
