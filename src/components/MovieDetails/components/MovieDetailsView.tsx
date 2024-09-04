import { MovieInfo } from "@/types/movie";
import { FC } from "react";
import Statistics from "@/components/MovieDetails/components/Statistics";
import Genre from "@/components/MovieDetails/components/Genre";

interface MovieDetailsProps {
  editableMovie: MovieInfo | null;
}

const MovieDetailsView: FC<MovieDetailsProps> = ({ editableMovie }) => {
  return (
    <div className={"flex flex-col gap-3"}>
      <h2 className="text-4xl font-bold">{editableMovie?.Title}</h2>
      <Genre value={editableMovie?.Genre} />
      <p className="text-lg">Year: {editableMovie?.Year}</p>
      <p className="text-lg">Director: {editableMovie?.Director}</p>
      <p className="text-lg">Actors: {editableMovie?.Actors}</p>
      <p className="text-md mb-5">{editableMovie?.Plot}</p>
      {editableMovie?.Ratings && (
        <div className="mt-2">
          <ul className={"flex gap-2 justify-start"}>
            {editableMovie.Ratings.map((rating, index) => (
              <Statistics source={rating.Source} value={rating.Value} key={index} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsView;
