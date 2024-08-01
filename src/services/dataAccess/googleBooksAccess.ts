import axios from "axios";

export async function getGoogleBooks(title: string) {
  try {
    const res = await axios.get("https://www.googleapis.com/books/v1/volumes", {
      params:{
        q: title,
        key: process.env.NEXT_PUBLIC_GOOGLE_BOOKS_APIKEY
      }
    });
    return res.data.items;
  } catch (error) {
    console.log(error);
  } 
}