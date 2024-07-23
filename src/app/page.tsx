"use client";

import SearchInput from "@/components/common/SearchInput";
import AddBooks from "@/components/layout/AddBooks";
import BookList from "@/components/layout/BookList";

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-40">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Favorite Books</h1>
        <SearchInput />
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-background border rounded-lg overflow-hidden group">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View book details</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt={book.title}
                width={300}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold line-clamp-2">{book.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">{book.author}</p>
                <Button
                  size="icon"
                  variant={book.isFavorite ? "solid" : "outline"}
                  className="absolute top-2 right-2 z-20"
                  onClick={() => handleFavorite(book.id)}
                >
                  <BookHeartIcon className="w-5 h-5" />
                  <span className="sr-only">{book.isFavorite ? "Unfavorite" : "Favorite"}</span>
                </Button>
              </div>
            </div>
          ))}
        </div> */}
      <BookList />
      <AddBooks />
    </main>
  );
}