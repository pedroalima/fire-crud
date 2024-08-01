import { BookType } from "@/contexts/BookContext";
import { ReactNode } from "react";
import BookDescription from "../BookDescription";

export default function BookCard({ children, book } : { children: ReactNode, book: BookType}) {
  return (
    <>
      {book.volumeInfo.imageLinks && 
        <div className="bg-background flex flex-col justify-between border rounded-lg overflow-hidden group w-full">
          <img
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
            width={300}
            height={400}
            className="w-full h-[250px] object-scale-down"
          />
          <div className="px-6 py-4">
            <h3 className="text-lg font-semibold line-clamp-2">{book.volumeInfo.title}</h3>
            {book.volumeInfo.authors?.map((item, i) => (
              <p key={i} className="text-sm text-muted-foreground line-clamp-1">{item}</p>
            ))}
            <div className="flex justify-between w-full mt-4">
              <BookDescription
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks?.smallThumbnail}
                description={book.volumeInfo.description}
                pageCount={book.volumeInfo.pageCount}
              />
              {children}
            </div>
          </div>
        </div>
      }
    </>
  );
}
