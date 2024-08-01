import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MdMenuBook } from "react-icons/md";

interface BookType { 
  title: string,
  description: string,
  authors: string[],
  image: string,
  pageCount: number
}

export default function BookDescription({ title, authors, image, description, pageCount } : BookType) {
  return (
    <Dialog>
      <DialogTrigger className="rounded-full bg-blue-500 hover:bg-blue-600 w-10 h-10 flex justify-center items-center">
        <MdMenuBook className="text-white text-2xl" />
      </DialogTrigger>
      <DialogContent className="bg-slate-50">
        <section className="flex flex-col md:flex-row items-center gap-14 p-6">
          <div className="md:w-[20%] p-2 bg-slate-100 rounded-xl">
            <img src={image} alt={title} className="w-full h-full" />
          </div>
          <div className="md:w-[80%] flex flex-col justify-between">
            <div>
              <DialogTitle className="text-xl md:text-4xl pb-1">{title}</DialogTitle>
              {authors.map((author, i) => (
                <p key={i} className="pb-3">{author}</p>
              ))}
              <DialogDescription className="text-justify">{description}</DialogDescription>
            </div>
            <div className="self-end py-4">
              <DialogDescription>{pageCount} páginas</DialogDescription>
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
