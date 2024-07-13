import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MdMenuBook } from "react-icons/md";

interface BookType { 
  title: string,
  description: string,
  author: string[],
  image: string
}

export default function BookDescription({ title, author, image, description } : BookType) {
  return (
    <Dialog>
      <DialogTrigger className="rounded-full bg-blue-500 hover:bg-blue-600 w-10 h-10 flex justify-center items-center">
        <MdMenuBook className="text-white text-2xl" />
      </DialogTrigger>
      <DialogContent className="bg-slate-50">
        <section className="flex gap-14 p-6">
          <div className="w-[20%] p-2 bg-slate-100 rounded-xl">
            <img src={image} alt={title} className="w-full h-full" />
          </div>
          <div className="w-[80%]">
            <div>
              <DialogTitle className="text-2xl">{title}</DialogTitle>
              <p className="pb-3">{author}</p>
              <DialogDescription>{description}</DialogDescription>
            </div>
            <div>
              <p>%</p>
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
