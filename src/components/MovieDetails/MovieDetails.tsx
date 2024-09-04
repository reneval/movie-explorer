import { FC } from "react";
import MovieDetailsView from "@/components/MovieDetails/components/MovieDetailsView";
import { cn } from "@/lib/utils";
import MovieDetailsEditForm from "@/components/MovieDetails/components/MovieDetailsEditForm";
import { useMovieEdit } from "@/hooks/useMovieEdit";

interface MovieDetailsProps {
  className?: string;
}

const MovieDetails: FC<MovieDetailsProps> = ({ className }) => {
  const {
    editMovieDetails,
    selectedMovieDetails: editableMovie,
    isMovieDetailsLoading,
    setIsEditing,
    isEditing,
  } = useMovieEdit();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  if (!editableMovie) {
    return <div>Select a movie to see the details</div>;
  }

  if (isMovieDetailsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cn(className, "p-4")}>
      <div className="flex flex-col lg:flex-row items-star gap-4">
        <div>
          <img src={editableMovie?.Poster} alt={editableMovie?.Title} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className={"basis-full flex flex-col gap-3"}>
          {isEditing && (
            <>
              <MovieDetailsEditForm editableMovie={editableMovie} handleChange={editMovieDetails} />
              <div className={"flex"}>
                <button className="btn btn-sm btn-outline btn-success mr-6 btn-wide" onClick={handleSaveClick}>
                  Save
                </button>
                <button className="btn btn-sm btn-outline btn-error btn-wide" onClick={handleSaveClick}>
                  {" "}
                  Cancel
                </button>
              </div>
            </>
          )}
          {!isEditing && (
            <>
              <MovieDetailsView editableMovie={editableMovie} />
              <button className="btn btn-sm btn-outline btn-primary btn-wide" onClick={handleEditClick}>
                {" "}
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
