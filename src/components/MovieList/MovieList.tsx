import { ChangeEvent, FC } from "react";
import MovieListItem from "@/components/MovieList/commponents/MovieListItem";
import MovieSkeleton from "@/components/MovieList/commponents/MovieSkeleton";
import { cn } from "@/lib/utils";
import { useMovieSearch } from "@/hooks/useMovieSearch";

type MovieListProps = {
  className?: string;
};

const MovieList: FC<MovieListProps> = ({ className }) => {
  const { searchTerm, searchResults, setSearchTerm, isMoviesLoading } = useMovieSearch();

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={cn(className, "flex flex-col gap-6")}>
      <input
        type="search"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearchInputChange}
        className="input input-bordered input-sm w-full"
      />

      <div>
        {isMoviesLoading &&
          Array(3)
            .fill(0)
            ?.map(() => <MovieSkeleton />)}
        {!isMoviesLoading && searchResults?.map((movie) => <MovieListItem movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
