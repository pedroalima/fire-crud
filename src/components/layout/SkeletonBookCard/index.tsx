import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonBookCard() {
  return (
    <div className="flex flex-col justify-between border rounded-lg w-full">
      <div className="w-full h-[230px] flex justify-center">
        <Skeleton className="w-40 h-48 mx-16 mt-8 mb-14 rounded-none bg-slate-200" />
      </div>
      <div className="px-6 py-4">
        <Skeleton className="h-4 flex-grow mt-4 bg-slate-200" />
        <Skeleton className="h-4 w-1/2 mt-4 bg-slate-200" />
      </div>
      <div className="px-6 py-4 flex justify-between items-center w-full">
        <Skeleton className="h-11 w-11 rounded-full bg-slate-200" />
        <Skeleton className="h-10 w-[38%] bg-slate-200" />
      </div>
    </div>
  );
}
