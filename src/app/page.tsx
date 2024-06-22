import AddBookForm from "@/components/layout/AddBookForm";
import BookList from "@/components/layout/BookList";
import { getBooksAction } from "@/services/actions/booksAction";

export default async function Home() {
  const AllBooks = await getBooksAction();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Meus Livros</h2>
        <BookList data={AllBooks} />
      </div>
      <AddBookForm />
    </main>
  );
}
