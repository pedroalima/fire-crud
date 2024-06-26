
import AddBook from "@/components/layout/AddBook";
import Banner from "@/components/layout/Banner";
import Header from "@/components/layout/Header";

export default async function Home() {
  return (
    <div className="h-screen relative">
      <Header />
      <main className="flex flex-col items-centers">
        <Banner />
        <div>
          <h2>Meus Livros</h2>
          {/* <BookList /> */}
        </div>
      </main>
      <AddBook />
    </div>
  );
}