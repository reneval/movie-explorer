import { FC } from "react";
import { cn } from "@/lib/utils";

interface GenreProps {
  value?: string;
}

const colorCls = ["badge-primary", "badge-secondary", "badge-outline", "badge-accent"];

const getColor = (index: number) => {
  return colorCls[index % colorCls.length];
};

const Genre: FC<GenreProps> = ({ value }) => {
  if (!value) return null;
  const genres = value?.split(",");
  return (
    <ul className={"flex gap-2"}>
      {genres.map((genre, index) => (
        <div className={cn("badge badge-outline", getColor(index))} key={index}>
          {genre}
        </div>
      ))}
    </ul>
  );
};
export default Genre;
