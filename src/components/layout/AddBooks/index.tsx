"use client";
import SearchInput from "@/components/common/SearchInput";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa6";
import BookResult from "../BookResult";

// const formSchema = z.object({
//   id: z.string(),
//   volumeInfo: z.object({
//     title: z.string(),
//     authors: z.array(z.string()),
//     imageLinks: z.object({
//       smallThumbnail: z.string(),
//       thumbnail: z.string()
//     })
//   })
// });

export default function AddBooks() {
  // const { addBook } = useContext(BookContext);

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     id: "",
  //     volumeInfo: {
  //       title: "",
  //       authors: [""],
  //       imageLinks: {
  //         smallThumbnail: "",
  //         thumbnail: ""
  //       }
  //     }
  //   }
  // });

  // function onSubmit(data: z.infer<typeof formSchema>) {
  //   addBook(data);
  // }

  return (
    <Dialog>
      <DialogTrigger className="fixed bottom-5 right-5 rounded-full bg-blue-500 hover:bg-blue-600 w-10 h-10 flex justify-center items-center">
        <FaPlus className="text-white text-2xl" />
      </DialogTrigger>
      <DialogContent className="bg-slate-50">
        <DialogHeader className="flex flex-col items-center gap-3">
          <DialogTitle className="text-center">Pesquise qualquer livro do nosso banco de dados</DialogTitle>
          <DialogDescription className="px-10 text-center">Você tem acesso a um dos maiores banco de dados do mundo, com o GoogleBooks</DialogDescription>
          <SearchInput />
        </DialogHeader>
        <BookResult />
        {/* <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center p-3 rounded-lg">
            <DrawerHeader className="px-40 flex flex-col gap-5">
              <DrawerTitle className="text-center">Qual é o título e o nome do autor do livro?</DrawerTitle>
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="volumeInfo.title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Título" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="volumeInfo.authors"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Autor" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </DrawerHeader>
            <DrawerFooter>
              <Button className="bg-blue-400 hover:bg-blue-500 self-center">Adicionar Livro</Button>
              <DrawerClose>
                <span className="text-sm p-2 cursor-pointer">Cancel</span>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </Form> */}
      </DialogContent>
    </Dialog>
  );
}
