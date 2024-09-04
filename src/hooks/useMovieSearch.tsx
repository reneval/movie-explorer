import { useMovieContext } from "@/contexts/MovieContext";

export const useMovieSearch = () => {
  const { searchTerm, searchResults, setSearchTerm, selectMovie, isMoviesLoading } = useMovieContext();
  return {
    searchTerm,
    searchResults,
    setSearchTerm,
    selectMovie,
    isMoviesLoading,
  };
};
