import { Skeleton } from "@/components/ui/skeleton";

const arr = Array(8).fill(3);
export default function SkeletonLoading() {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 auto-cols-auto grid-flow-row ">
      {arr.map((_, index: number) => (
        <Skeleton className="w-72 h-80" key={index}  />
      ))}
    </div>
  );
}
