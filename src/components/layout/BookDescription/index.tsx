import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { MdMenuBook } from "react-icons/md";

interface BookType { 
  title: string,
  description: string,
  author: string[],
  image: string,
  pageCount: number
}



export default function BookDescription({ title, author, image, description, pageCount } : BookType) {
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
          <div className="w-[80%] flex flex-col justify-between">
            <div>
              <DialogTitle className="text-4xl">{title}</DialogTitle>
              <p className="pb-3">{author}</p>
              <DialogDescription>{description}</DialogDescription>
            </div>
            <div className="flex justify-between">
              <p>{Math.floor((224 * 100) / pageCount)}%</p>
              <Progress value={50} className="w-[60%]" />
              <DialogDescription className="self-end">{pageCount} páginas</DialogDescription>
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
