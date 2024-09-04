import { Movie } from "@/types/movie";
import { FC } from "react";
import { useMovieSearch } from "@/hooks/useMovieSearch";

type MovieListProps = {
  movie: Movie;
};

const MovieListItem: FC<MovieListProps> = ({ movie }) => {
  const { selectMovie } = useMovieSearch();

  return (
    <div
      className="flex items-center mb-1 cursor-pointer rounded-lg border border-primary-content hover:bg-primary-content p-2 "
      onClick={() => selectMovie(movie)}
      key={movie.imdbID}
    >
      <div className="flex-shrink-0">
        <img className="w-6 h-8" src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="flex-1 min-w-0 ms-4">
        <p className="text-sm font-medium truncate">{movie.Title}</p>
        <p className="text-sm truncate dark:text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieListItem;
