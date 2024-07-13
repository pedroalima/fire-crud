import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MdMenuBook } from "react-icons/md";

export default function BookDescription({ title, author, image } : { title: string, author: string[], image: string }) {
  return (
    <Dialog>
      <DialogTrigger className="rounded-full bg-blue-500 hover:bg-blue-600 w-10 h-10 flex justify-center items-center">
        <MdMenuBook className="text-white text-2xl" />
      </DialogTrigger>
      <DialogContent className="bg-slate-50">
        <section className="flex gap-14">
          <div className="w-[20%]">
            <img src={image} alt={title} className="w-full h-full" />
          </div>
          <div>
            <DialogTitle>{title}</DialogTitle>
            <h3>{author}</h3>
            <DialogDescription></DialogDescription>
            <p>%</p>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
