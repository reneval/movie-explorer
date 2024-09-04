import { FC } from "react";
import { Skeleton } from "@/components/Skeleton/Skeleton";

const MovieSkeleton: FC = () => {
  return (
    <div className="flex items-center space-x-4 mb-5">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default MovieSkeleton;
