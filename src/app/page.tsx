"use client";
import { addBooksAction } from "@/services/actions/booksAction";
import { getBooksObserver } from "@/services/observers/booksObservers";
import { useEffect } from "react";

export default function Home() {
  // const [ books, setBooks ] = useState<DocumentData>([]);

  useEffect(() => {
    getBooksObserver();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Meus Livros</h2>
        {/* <ul className="bg-slate-800 p-6 rounded-lg">
          {books.map((book) => (
            <li key={book.id} className="bg-slate-600 p-4 my-2 rounded-lg">
              <h3>Título: {book.title}</h3>
              <span>Author: {book.author}</span>
            </li>
          ))}
        </ul> */}
        <button onClick={() => addBooksAction({title: "Rápido e Devagar", author: "Daniel kahneman"})}>Add Book</button>
      </div>
    </main>
  );
}
