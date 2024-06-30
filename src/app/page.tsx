
import AddBooks from "@/components/layout/AddBooks";
import Banner from "@/components/layout/Banner";
import Header from "@/components/layout/Header";
import Highlights from "@/components/layout/Highlights";

export default async function Home() {
  return (
    <div className="h-screen relative">
      <Header />
      <main className="flex flex-col items-centers">
        <Banner />
        <Highlights />
        <div>
          <h2>Meus Livros</h2>
          {/* <BookList /> */}
        </div>
      </main>
      <AddBooks />
    </div>
  );
}