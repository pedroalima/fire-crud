import axios from "axios";

export async function getGoogleBooks(title: string) {
  try {
    const res = await axios.get("https://www.googleapis.com/books/v1/volumes", {
      params:{
        q: title,
        key: process.env.GOOGLE_BOOKS_APIKEY
      }
    });
      
    console.log(res.data.items);
    return res.data.items;
  } catch (error) {
    console.log(error);
  } 
}