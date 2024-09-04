import { useMovieContext } from "@/contexts/MovieContext";

export const useMovieEdit = () => {
  const { isEditing, setIsEditing, selectedMovie, editMovieDetails, selectedMovieDetails, isMovieDetailsLoading } =
    useMovieContext();
  return {
    selectedMovie,
    editMovieDetails,
    selectedMovieDetails,
    isMovieDetailsLoading,
    isEditing,
    setIsEditing,
  };
};
