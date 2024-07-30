import { BookContext } from "@/contexts/BookContext";
import { useContext, useEffect } from "react";

export const useBooks = () => {
  const { books, getAllBooks, isLoading } = useContext(BookContext);

  useEffect(() => {
    getAllBooks();
  }, []);
 
  return { books, isLoading };
};